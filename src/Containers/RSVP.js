import React, { useEffect, useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Nav from '../Containers/Nav'

//radio button form control
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import Checkbox from '@mui/material/Checkbox';
import Fab from "@mui/material/Fab";
import { CircularProgress } from "@mui/material";

function RSVP() {
  
  const [isArray, setisArray] = useState([]);
  //setting name on change handler
  const [isName, setisName] = useState("");
  //set if found in the array
  const [isArrayName, setisArrayName] = useState("");
  //set confirmation page on successful patch request
  const [isConfirmation, setisConfirmation] = useState(false);
  //set object for confirmation
  const [isGuestConfirmation, setisGuestConfirmation] = useState({})
  //loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      //nav reset implementation 
      // if () {
      //   setisArrayName('');
      //   setisConfirmation(false);
      // }

      fetch("https://wedding-glennan.herokuapp.com/guests")
          .then((r) => r.json())
          .then((data) => {
            console.log('fetching or refetching')
            setisArray(data)
            setIsLoading(false);
            // make sure spinner is disabled if no error
          })
          .catch((err) => {
            // need to load spinner on error
            setIsLoading(true);
            console.log(err)});
  }, []);


  const handleStateChange = (obj) => {
    //update when submitted
    fetch(`https://wedding-glennan.herokuapp.com/guests/update/${obj._id}`, {
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
        guestDietary: obj.guestDietary
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setisConfirmation(true);
        setisGuestConfirmation(obj);
      })
      .catch((err) => {
        console.log(err);
        alert('Please Try Again Shortly')
      });
  };
  //set name on change
  const handleChange = (e) => {
    setisName(e.target.value);
    e.preventDefault();
  };
  //handle submission find name and set array name if found else render alert or error
  const handleSubmit = (e) => {
    e.preventDefault();
    let name = isName.replace(/^\s+|\s+$/gm,'');
    let person = isArray.find((n) => n.name === name);
    if (person != null || undefined) {
      //if they already registered
      if (person.Entree !== '' || null) {
        setisConfirmation(true);
        // console.log(person);
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
    <Nav />
    {isLoading ? (
      <div className="container">
        <CircularProgress />
      </div>
      ) : (
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
              required
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
    )}
    </>
  );
}

function GuestForm(props) {
  //state changes
  const [isAttending, setisAttending] = useState(true);
  const [isFoodSelection, setisFoodSelection] = useState("chicken");
  const [isDietaryRestriction, setisDietaryRestriction] = useState("");
  const [isGuestName, setisGuestName] = useState("null");
  const [isGuestMeal, setisGuestMeal] = useState("chicken");
  const [isGuestDietaryRestriction, setisGuestDietaryRestriction] =
    useState("null");
  const [isPlusOne, setisPlusOne] = useState(false)

  const handleChange = (e) => {
    // console.log("target id: " + e.target.id);
    switch (e.target.id) {
      case "foodSelection":
        // console.log(e.target.value);
        setisFoodSelection(e.target.value);
        break;
      case "attending":
        // console.log("checked: " + e.target.checked);
        setisAttending(e.target.checked);
        break;
      case "dietary":
        // console.log("dietary");
        // console.log(e.target.value);
        setisDietaryRestriction(e.target.value);
        break;
      case "guestName":
        // console.log("guest name" + e.target.value);
        setisGuestName(e.target.value);
        break;
      case "guestfoodSelection":
        // console.log("guest food " + e.target.value);
        setisGuestMeal(e.target.value);
        break;
      case "guestDietary":
        // console.log("guest restrictions " + e.target.value);
        setisGuestDietaryRestriction(e.target.value);
        break;
      case "plusOne":
        // console.log('plus one')
        setisPlusOne(e.target.checked)
        if (e.target.checked === false){
          setisGuestName('null');
          setisGuestMeal('null');
          setisGuestDietaryRestriction('null');
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
      let oldObj = props.guest;
      let newObj = {
        ...oldObj,
        attending: isAttending,
        Entree: isFoodSelection,
        Dietary: isDietaryRestriction,
        guestName: isGuestName,
        guestMeal: isGuestMeal,
        guestDietary: isGuestDietaryRestriction,
      };
      props.updateState(newObj);
      e.preventDefault();
  };

  return (
    <>
      {isAttending ? (
        <>
        <form className="rsvpForm" onSubmit={handleSubmit}>
          <h1>{props.guest.name}</h1>
          <FormControl color="secondary" component="fieldset">
            <FormLabel component="legend">Food Selection</FormLabel>
            <RadioGroup
              row
              aria-label="food"
              name="row-radio-buttons-group"
              onChange={handleChange}
              defaultValue="chicken"
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
              required
              id="dietary"
              label="Dietary Restrictions"
              color="secondary"
              variant="outlined"
              onChange={handleChange}
            />
            {props.guest.numberOfGuests === 0 ? null : (
              <>
                <FormControlLabel control={<Checkbox onChange={handleChange} id="plusOne" color="secondary"/>} label="Plus One" />
                {isPlusOne ? (
                  <>
                  <h1>Guest Form</h1>
                  <TextField
                    required
                    id="guestName"
                    label="Name"
                    color="secondary"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <FormLabel component="legend">Guest Food Selection</FormLabel>
                  <RadioGroup
                    required
                    row
                    aria-label="food"
                    name="row-radio-buttons-group"
                    onChange={handleChange}
                    defaultValue="chicken"
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
                    required
                    id="guestDietary"
                    label="Dietary Restrictions"
                    color="secondary"
                    variant="outlined"
                    onChange={handleChange}
                  />
                 </>
                ) : null}
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
        </>        
      ) : (
        <>
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
        </>
      )}     
    </>
  );
}

function Confirmation(props) {


    return (
        <>
        {props.guestConfirmation.attending ? (
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
                            {props.guestConfirmation.guestName !== 'null' ? (
                              <>
                              <li>Plus One: ✅</li>
                              <li>Guest Name: {props.guestConfirmation.guestName}</li>
                              <li>Guest Meal: {props.guestConfirmation.guestMeal}</li>
                              <li>Guest Dietary: {props.guestConfirmation.guestDietary}</li>  
                              </>

                            ) : null }
                        </>                  
                    ) : null}
                </ul>
              </div>
          </div>
        ) : (
          <div className="container">
              <h1>Confirmation Page</h1>
              <h2>Sorry That You're Unable To Go!</h2>
          </div>
        )}
        </>

    )
    
}

export default RSVP;
