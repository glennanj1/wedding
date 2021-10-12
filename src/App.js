import './App.css';
import Typewriter from 'typewriter-effect';
import Sound from 'react-sound';



function App() {
  
  return (
    <div className="App">
      <video className="video" autoPlay loop playsInline defaultMuted muted >
        <source src="https://d3ddatyom1hv87.cloudfront.net/Wedding.mp4" type="video/mp4" />
      </video> 
      <Sound
      url="https://d3ddatyom1hv87.cloudfront.net/oneKiss.mp3"
      playStatus={Sound.status.PLAYING}
      volume={100}
      />
      <Typewriter
        options={{
          strings: ['We are getting married!', 'Please RSVP below', 'Thanks for visiting the site!', "Who's excited?"],
          autoStart: true,
          loop: true,
        }}
      />
      <button className="rsvp-button">RSVP</button>
    </div>
  );
}

export default App;
