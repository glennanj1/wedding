import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
        <Link className="navButton" to="/about">Home</Link>
        <Link className="navButton" to="/location">Location</Link>
        <Link className="navButton" to="/rsvp">RSVP</Link>
        <Link className="navButton" to="/story">Our Story</Link>
        <Link className="navButton" to="/registry">Registry</Link>
        <Link className="navButton" to="/accomodations">Accomodations</Link>
    </div>
  );
}


