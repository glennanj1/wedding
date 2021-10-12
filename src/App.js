import './App.css';
import Typewriter from 'typewriter-effect';
import Sound from 'react-sound';
import React, { useState } from 'react';
import confetti from 'canvas-confetti';

function App() {
  
  
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleClick = () => {
    var end = Date.now() + (15 * 1000);

    // go Buckeyes!
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
    console.log('click');
    setIsPlaying(true);
  };
  

  return (
    <div className="App">
      <video className="video" autoPlay loop playsInline defaultMuted muted >
        <source src="https://d3ddatyom1hv87.cloudfront.net/Wedding.mp4" type="video/mp4" />
      </video> 
      <Sound
      url="https://d3ddatyom1hv87.cloudfront.net/oneKiss.mp3"
      playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
      volume={50}
      />
      <Typewriter
        options={{
          strings: ['We are getting married!', 'Please RSVP below', 'Thanks for visiting the site!', "Who's excited?"],
          autoStart: true,
          loop: true,
        }}
      />
      <button onClick={handleClick} className="rsvp-button">RSVP</button>
    </div>
  );
}

export default App;
