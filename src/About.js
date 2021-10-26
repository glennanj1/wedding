import React, { useState } from 'react';
import './About.css'
import 'animate.css';
import SimpleBottomNavigation from './SimpleNavBottom'
import Us from './Us'
import Location from './Location';
// import Sound from 'react-sound';

function About() {

    const [isDefault, setIsDefault] = useState(true);
    const [isLocation, setIsLocation] = useState(false)


    const handleClick = e => {
      switch (e.target.id) {
        case 'location':
          setIsDefault(false);
          setIsLocation(true);
          break;
        default:
          setIsDefault(true);
          setIsLocation(false);
          break;
      }
    }

    return (
    <>
    <div className="aboutWrapper">

      <div className="nav">
        <button onClick={handleClick} className="navButton" id="home">Home</button>
        <button onClick={handleClick} className="navButton" id="location">Location</button>
        <button onClick={handleClick} className="navButton" id="home">RSVP</button>
        <button onClick={handleClick} className="navButton" id="location">Our Story</button>
      </div>

      {isDefault ? ( 
        <Us />
      ) : null}
      {isLocation ? (
        <Location />
      ) : null}
      <SimpleBottomNavigation />
    </div>
    </>
  )
}

export default About
