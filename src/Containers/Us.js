import React, { useState, useEffect } from 'react';
import '../Styles/About.css'
import 'animate.css';
import Button from '@mui/material/Button';
import useSound from 'use-sound';
import Sound from 'react-sound'


function Us() {
    
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        setIsPlaying(false)
    }, []);

    let handleClick = () => {

        setIsPlaying(!isPlaying);

    }

    return (
        <div className="container animate__animated animate__slideInLeft">
            <Sound
                url="https://d3ddatyom1hv87.cloudfront.net/oneKiss.mp3"
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                volume={60} 
                />
            <div className="photoContainer">
            <h1>John Glennan & Victoria Dangelo</h1>
            <h2>10.29.2022</h2>
            <Button variant='outlined' onClick={handleClick}>{isPlaying ? ('Pause') : ('Play')}</Button>
            </div>
        </div>
    )
}

export default Us
