import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

import confetti from 'canvas-confetti';
import { useHistory } from "react-router-dom";
import './Home.css';
import 'animate.css';


function Home() {
    
    //browser routing and history
    const history = useHistory();

    //animation unmount setup 
    const [animateBeforeUnmount, setAnimateBeforeUnmount] = useState(false);
    const [isRendered, setIsRendered] = React.useState(true);
    const divRef = React.useRef();

    const handleAnimationEnd = () => {
      setIsRendered(false);
      setAnimateBeforeUnmount(false);
      
      let path = `/about`;
      history.push(path);
  
    };
      
    const handleClick = () => {
      var end = Date.now() + (15 * 1000);
    
      // go us!
      var colors = ['#000080', '#B2AC88'];
    
      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });
    
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());

      setAnimateBeforeUnmount(true)
    
    };

    return (
      <>
        {isRendered && (<div className={animateBeforeUnmount && 'animate__animated animate__fadeOut'} ref={divRef} onAnimationEnd={handleAnimationEnd} >
            <div className="App" >
                <Typewriter
                    options={{
                    strings: ['We are getting married', 'Thanks for Visitng', 'The Knot please hire me', 'Come Back any time!', "Who's excited?", "If you made it this far keep reading", "I can't wait to tear it up!"],
                    autoStart: true,
                    loop: true,
                    }}
                />
                <button onClick={handleClick} className="rsvp-button">Enter</button>
                </div>
          </div>)}
      </>
    )
}

export default Home
