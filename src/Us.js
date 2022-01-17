import React, { useState, useEffect } from 'react';
import './About.css'
import 'animate.css';
import Sound from 'react-sound';

function Us() {
    
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        setIsPlaying(true)
    }, []);

    return (
        <div className="container animate__animated animate__slideInLeft">
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
    )
}

export default Us
