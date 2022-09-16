import { useState, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { Link} from "react-router-dom";

import confetti from 'canvas-confetti';
import { useNavigate } from "react-router-dom";
import '../Styles/Home.css';
import 'animate.css';


function Home() {
    
    //browser routing and history
    const history = useNavigate();

    //animation unmount setup 
    const [animateBeforeUnmount, setAnimateBeforeUnmount] = useState(false);
    const [isRendered, setIsRendered] = useState(true);
    const divRef = useRef();

    const handleAnimationEnd = () => {
      setIsRendered(false);
      setAnimateBeforeUnmount(false);
      
      let path = `/about`;
      history.push(path);
  
    };
      
    const handleClick = () => {
      var end = Date.now() + (10 * 1000);
    
      // go us!
      var colors = ['#000080', '#8ABD91'];
    
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
            <div className="App">
                <Typewriter
                    options={{
                    strings: ['We are getting married!!!', 'Thanks for Visitng', 'Come Back any time!', "Who's excited?", 'Chicken? Filet? Crab Cakes?'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                <Link onClick={handleClick} className="rsvp-button" to="/about" >Enter</Link>
                </div>
          </div>)}
      </>
    )
}

export default Home