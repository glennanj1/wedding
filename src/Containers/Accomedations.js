import React from 'react';
import Nav from '../Containers/Nav';
import '../Styles/Accomedations.css';

function Accomedations() {

  return (
  <>
  <Nav />
      <div className="accom_wrapper animate__animated animate__slideInLeft">
        <div className="accom_container">
          <h1>Accomedations</h1>
          <h2>
            There is a large parking lot available at The Farm Bakery and Events for guests to park in. For guests that will be lodging at the Springhill Suites by Marriott, there will be a shuttle service transporting guests from the hotel- 3800 West Drive Center Valley, PA 18034- to The Farm Bakery and Events at 3:30pm. Following the reception, the shuttle will transport guests from the Farm Bakery back to the Springhill Suites by Marriott at 10:00pm. 
          </h2>
        </div>
        <div className="accom_container">
          <h1>
            Lodging
          </h1>
          <h2>
            There is a block of rooms available at the Springhill Suites by Marriott Center Valley (make link)- 3800 West Drive Center Valley, PA 18034. Following the reception, there will be a post wedding gathering at the Hotel.
          </h2>
        </div>
    </div>
  </>
        
  )}

export default Accomedations;
