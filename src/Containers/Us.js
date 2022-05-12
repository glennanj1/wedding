import React, { useState, useEffect } from 'react';
import '../Styles/About.css'
import 'animate.css';
import Button from '@mui/material/Button';
import useSound from 'use-sound';


function Us() {
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume] = useState(.01);
    const [play, { stop }] = useSound('https://d3ddatyom1hv87.cloudfront.net/oneKiss.mp3', {volume});


    useEffect(() => {
        if (isPlaying) {
            play();
        } else if (!isPlaying) {
            stop();
        } 
    }, [stop, isPlaying, play]);

    let handleClick = (e) => {
        if (e.target.innerText === "PLAY") {
            setIsPlaying(true)

        } else if (e.target.innerText === "PAUSE") {
            setIsPlaying(false);
        }
    }

    return (
        <div className="container animate__animated animate__slideInLeft">
            {/* <Sound
                url="https://d3ddatyom1hv87.cloudfront.net/oneKiss.mp3"
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                volume={30} 
                /> */}
            <div className="photoContainer">
            <h1>John Glennan & Victoria Dangelo</h1>
            <h2>10.29.2022</h2>
            <Button variant='outlined' onClick={handleClick}>{isPlaying ? ('Pause') : ('Play')}</Button>
            </div>
        </div>
    )
}

export default Us
