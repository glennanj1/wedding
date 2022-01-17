import React, { useState } from 'react';
import './About.css'
import 'animate.css';
import SimpleBottomNavigation from './SimpleNavBottom'
import Us from './Us'
import AboutUs from './AboutUs';
import RSVP from './RSVP';
import Location from './Location';
import Registry from './Registry';
// import Sound from 'react-sound';
import CircularProgress from '@mui/material/CircularProgress';


function About() {


    //set isLoading
    const [isLoading, setIsLoading] = useState(false);
    const [isDefault, setIsDefault] = useState(true);
    const [isLocation, setIsLocation] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isRSVP, setIsRSVP] = useState(false)
    const [isRegistry, setIsRegistry] = useState(false)
    const [isClicked, setIsClicked] = useState('')

    const handleError = e => {
      if (e === 'none') {
        setIsLoading(false);
      } else {
        setIsLoading(true)
        console.log(e);
        console.log('error line 25 prop')
      }
    }

    const handleClick = (e) => {
      console.log(e.currentTarget.id);
      switch (e.currentTarget.id) {
        case 'location':
          setIsDefault(false);
          setIsLocation(true);
          setIsAbout(false);
          setIsRSVP(false)
          setIsRegistry(false);
          break;
        case 'home':
          setIsDefault(true);
          setIsLocation(false);
          setIsAbout(false);
          setIsRSVP(false);
          setIsRegistry(false);
          break;
        case 'about':
          setIsDefault(false);
          setIsLocation(false);
          setIsAbout(true);
          setIsRSVP(false);
          setIsRegistry(false);
          break;
        case 'rsvp':
          setIsDefault(false);
          setIsLocation(false);
          setIsAbout(false);
          setIsRSVP(true);
          setIsRegistry(false);
          setIsClicked(e);
          break;
        case 'registry':
          setIsDefault(false);
          setIsLocation(false);
          setIsAbout(false);
          setIsRSVP(false);
          setIsRegistry(true);
          break;
        default:
          setIsDefault(true);
          setIsLocation(false);
          setIsAbout(false);
          setIsRSVP(false);
          break;
      }
    }

    return (
    <>
    <div className="animate__animated animate__fadeIn aboutWrapper">
      <div className="nav">
        <button onClick={handleClick} className="navButton" id="home">Home</button>
        <button onClick={handleClick} className="navButton" id="location">Location</button>
        <button onClick={handleClick} className="navButton" id="rsvp">RSVP</button>
        <button onClick={handleClick} className="navButton" id="about">Our Story</button>
        <button onClick={handleClick} className="navButton" id="registry">Registry</button>
      </div>

      {isDefault ? ( 
        <Us />
      ) : null}
      
      {isLocation ? (
        <Location />
      ) : null}

      {isAbout ? (
        <AboutUs />
      ) : null}
      
      {isLoading ? 
        (
          <div className="container">
            <CircularProgress />)
          </div>
        )
      :  
      isRSVP ? (
        <RSVP handleCallback={handleError} passClickDown={isClicked} />
      ) 
      : 
      null}
      {isRegistry ? (
        <div className="container">
          <Registry /> 
        </div>
      ) : null}
      <SimpleBottomNavigation handleCallback={handleClick} />
    </div>
    </>
  )
}

export default About
