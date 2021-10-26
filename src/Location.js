import React from 'react'
import 'animate.css';
import './Location.css'


function Location() {
    return (
        <div className="container map animate__animated animate__slideInLeft">
            <h1>Google Maps</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.054284542485!2d-75.3850087846064!3d40.47406406007443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c422fba0ceae9b%3A0x5425b64b2ed2ab8b!2sThe%20Farm%20Bakery%20%26%20Events!5e0!3m2!1sen!2sus!4v1635215889492!5m2!1sen!2sus" className="gMap" allowFullScreen="true" title="GoogleMaps" loading="lazy"></iframe>
        </div>
    )
}

export default Location
