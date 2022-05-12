import React from 'react';
import '../Styles/About.css'
import 'animate.css';
import Nav from '../Containers/Nav';
import Us from '../Containers/Us';

function About() {

  return (
    <>
      <div className="animate__animated animate__fadeIn aboutWrapper">
        <Nav />
        <Us />
      </div>
    </>
  )
}

export default About
