import React, { useState, useEffect } from 'react';
import './About.css'
import 'animate.css';
import SimpleBottomNavigation from './SimpleNavBottom'
import Location from './Location';
import Sound from 'react-sound';

function About() {


    
    const [isPlaying, setIsPlaying] = useState(false);
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

    useEffect(() => {
        // Update the document title using the browser API
        setIsPlaying(true)
    }, []);
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
          <div className="container animate__animated animate__slideInRight">
              <Sound
                  url="https://d3ddatyom1hv87.cloudfront.net/oneKiss.mp3"
                  playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                  volume={50}
                  />
              <div className="photoContainer">

              <h1>John & Victoria</h1>
              <h2>10.29.2022</h2>
              </div>
          </div>
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
