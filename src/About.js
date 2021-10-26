import React, { useState } from 'react';
import './About.css'
import 'animate.css';
import SimpleBottomNavigation from './SimpleNavBottom'
import Us from './Us'
import AboutUs from './AboutUs';
import RSVP from './RSVP';
import Location from './Location';
// import Sound from 'react-sound';

function About() {

    const [isDefault, setIsDefault] = useState(true);
    const [isLocation, setIsLocation] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isRSVP, setIsRSVP] = useState(false)



    const handleClick = (e) => {
      console.log(e.currentTarget.id);
      switch (e.currentTarget.id) {
        case 'location':
          setIsDefault(false);
          setIsLocation(true);
          setIsAbout(false);
          setIsRSVP(false)
          break;
        case 'home':
          setIsDefault(true);
          setIsLocation(false);
          setIsAbout(false);
          setIsRSVP(false);
          break;
        case 'about':
          setIsDefault(false);
          setIsLocation(false);
          setIsAbout(true);
          setIsRSVP(false);
          break;
        case 'rsvp':
          setIsDefault(false);
          setIsLocation(false);
          setIsAbout(false);
          setIsRSVP(true);
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

      {isRSVP ? (
        <RSVP />
      ) : null}

      <SimpleBottomNavigation handleCallback={handleClick} />
    </div>
    </>
  )
}

export default About
