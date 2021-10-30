import React, { useEffect, useState } from "react";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";

//radio button form control
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import Fab from "@mui/material/Fab";
// import Box from '@mui/material/Box';

function RSVP() {
  useEffect(() => {
    fetch("https://glennan-wedding.herokuapp.com/guests")
      .then((r) => r.json())
      .then((data) => setisArray(data))
      .catch((err) => console.log(err));
  }, []);

  //setting initial array
  const [isArray, setisArray] = useState([]);
  //setting name on change handler
  const [isName, setisName] = useState("");
  //set if found in the array
  const [isArrayName, setisArrayName] = useState("");
  //set confirmation page on successful patch request
  const [isConfirmation, setisConfirmation] = useState(false);
  //set object for confirmation
  const [isGuestConfirmation, setisGuestConfirmation] = useState({})

  //handle state change (app is small enough to use local state vs redux)
  const handleStateChange = (obj) => {
    console.log("updated obj");
    console.log(obj);
    //map over object and find index by name (eventually find by id when hooked up to DB)
    let index = isArray
      .map((e) => {
        return e.name;
      })
      .indexOf(obj.name);
    //copy old arr and spread *like butter*
    let newArr = [...isArray];
    //update the new arr at its index
    newArr[index] = { ...newArr[index], ...obj };
    //set the new state (eventually a fetch to patch the already entered arr)
    setisArray(newArr);
    console.log(obj);

    //update when submitted
    fetch(`https://glennan-wedding.herokuapp.com/${obj._id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: obj.name,
        attending: obj.attending,
        numberOfGuests: obj.numberOfGuests,
        Entree: obj.Entree,
        Dietary: obj.Dietary,
        guestName: obj.guestName,
        guestMeal: obj.guestMeal,
        guestDietary: obj.guestDietary,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
          console.log(data);
          setisConfirmation(true);
          setisGuestConfirmation(data)
      })
      .catch((err) => console.log(err));
    console.log("line 44 is array");
    console.log(isArray);
  };
  //set name on change
  const handleChange = (e) => {
    console.log("change");
    console.log(e.target.value);
    setisName(e.target.value);
    e.preventDefault();
  };
  //handle submission find name and set array name if found else render alert or error
  const handleSubmit = (e) => {
    e.preventDefault();
    let person = isArray.find((n) => n.name === isName);
    if (person != null || undefined) {
      //if they already registered
      debugger;
      if (person.attending !== null || undefined) {
        setisConfirmation(true);
        console.log(person);
        setisGuestConfirmation(person);
      } else {
        setisArrayName(person);
      }
    } else {
      alert(`Name ${isName} not found please try again`);
      setisArrayName("");
      console.log("error finding name");
    }
  };
  return (
      <>
    {isConfirmation ? (<Confirmation guestConfirmation={isGuestConfirmation} />) : (
    <div className="container animate__animated animate__slideInLeft">
      {isArrayName ? (
        <GuestForm updateState={handleStateChange} guest={isArrayName} />
      ) : (
        <>
          <h1>RSVP Form</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Name"
              color="secondary"
              variant="outlined"
              onChange={handleChange}
            />
          </form>

          <h1>Please Enter Name</h1>
        </>
      )}
    </div>
    )}
    </>
  );
}

function GuestForm(props) {
  //state changes
  const [isAttending, setisAttending] = useState(true);
  const [isFoodSelection, setisFoodSelection] = useState("");
  const [isDietaryRestriction, setisDietaryRestriction] = useState("");
  const [isGuestName, setisGuestName] = useState("");
  const [isGuestMeal, setisGuestMeal] = useState("");
  const [isGuestDietaryRestriction, setisGuestDietaryRestriction] =
    useState("");

  const handleChange = (e) => {
    console.log("target id: " + e.target.id);
    switch (e.target.id) {
      case "foodSelection":
        console.log(e.target.value);
        setisFoodSelection(e.target.value);
        break;
      case "attending":
        console.log("checked: " + e.target.checked);
        setisAttending(e.target.checked);
        break;
      case "dietary":
        console.log("dietary");
        console.log(e.target.value);
        setisDietaryRestriction(e.target.value);
        break;
      case "guestName":
        console.log("guest name" + e.target.value);
        setisGuestName(e.target.value);
        break;
      case "guestfoodSelection":
        console.log("guest food " + e.target.value);
        setisGuestMeal(e.target.value);
        break;
      case "guestDietary":
        console.log("guest restrictions " + e.target.value);
        setisGuestDietaryRestriction(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    console.log(e);
    let oldObj = props.guest;
    console.log("guest obj" + oldObj);
    console.log(isAttending);
    console.log("submitted");
    let newObj = {
      ...oldObj,
      attending: isAttending,
      Entree: isFoodSelection,
      Dietary: isDietaryRestriction,
      guestName: isGuestName,
      guestMeal: isGuestMeal,
      guestDietary: isGuestDietaryRestriction,
    };
    console.log(newObj);
    props.updateState(newObj);
    e.preventDefault();
  };

  return (
    <>
      {isAttending ? (
        <form className="rsvpForm" onSubmit={handleSubmit}>
          <h1>{props.guest.name}</h1>
          <FormControl color="secondary" component="fieldset">
            <FormLabel component="legend">Food Selection</FormLabel>
            <RadioGroup
              row
              aria-label="food"
              name="row-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value="chicken"
                control={<Radio color="secondary" id="foodSelection" />}
                label="Chicken"
              />
              <FormControlLabel
                value="filet"
                control={<Radio color="secondary" id="foodSelection" />}
                label="Filet"
              />
              <FormControlLabel
                value="crab cakes"
                control={<Radio color="secondary" id="foodSelection" />}
                label="Crab Cake"
              />
            </RadioGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  color="secondary"
                  onChange={handleChange}
                  id="attending"
                />
              }
              label="Attending"
            />
            <TextField
              id="dietary"
              label="Dietary Restrictions"
              color="secondary"
              variant="outlined"
              onChange={handleChange}
            />
            {props.guest.numberOfGuests == 0 ? null : (
              <>
                <h1>Guest Form</h1>
                <TextField
                  id="guestName"
                  label="Name"
                  color="secondary"
                  variant="outlined"
                  onChange={handleChange}
                />
                <FormLabel component="legend">Guest Food Selection</FormLabel>
                <RadioGroup
                  row
                  aria-label="food"
                  name="row-radio-buttons-group"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="chicken"
                    control={
                      <Radio color="secondary" id="guestfoodSelection" />
                    }
                    label="Chicken"
                  />
                  <FormControlLabel
                    value="filet"
                    control={
                      <Radio color="secondary" id="guestfoodSelection" />
                    }
                    label="Filet"
                  />
                  <FormControlLabel
                    value="crab cakes"
                    control={
                      <Radio color="secondary" id="guestfoodSelection" />
                    }
                    label="Crab Cake"
                  />
                </RadioGroup>
                <TextField
                  id="guestDietary"
                  label="Dietary Restrictions"
                  color="secondary"
                  variant="outlined"
                  onChange={handleChange}
                />
              </>
            )}

            <Fab
              type="submit"
              variant="extended"
              color="secondary"
              aria-label="add"
            >
              Submit
            </Fab>
          </FormControl>
        </form>
      ) : (
        <form className="rsvpForm" onSubmit={handleSubmit}>
          <h1>{props.guest.name}</h1>
          <FormControlLabel
            control={
              <Switch
                color="secondary"
                onChange={handleChange}
                id="attending"
              />
            }
            label="Attending"
          />
          <Fab
            type="submit"
            variant="extended"
            color="secondary"
            aria-label="add"
          >
            Submit
          </Fab>
        </form>
      )}
    </>
  );
}

function Confirmation(props) {

    return (
        <>
          <div className="container">
              <h1>Confirmation Page</h1>
              <h2>Details: </h2>
              <div> 
                <ul>
                    <li>Your Name: {props.guestConfirmation.name}</li>
                    <li>Your Entree: {props.guestConfirmation.Entree}</li>
                    <li>Dietary Restrictions: {props.guestConfirmation.Dietary}</li>
                    {props.guestConfirmation.numberOfGuests !== 0 ? (
                        <>
                            <li>Plus One: ✅</li>
                            <li>Guest Name: {props.guestConfirmation.guestName}</li>
                            <li>Guest Meal: {props.guestConfirmation.guestMeal}</li>
                            <li>Guest Dietary: {props.guestConfirmation.guestDietary}</li>  
                        </>                  
                    ) : null}
                </ul>
              </div>
          </div>
        </>
    )
    
}

export default RSVP;
