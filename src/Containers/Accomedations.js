import React from 'react';
import Nav from '../Containers/Nav';
import '../Styles/Accomedations.css';

function Accomedations() {

  return (
  <>
  <Nav />
      <div className="accom_wrapper animate__animated animate__slideInLeft">
        <div className="accom_container">
          <h1>
            Lodging
          </h1>
          <h2>
            {/* There is a block of rooms available at the Springhill Suites by Marriott Center Valley (make link)- 3800 West Drive Center Valley, PA 18034. Following the reception, there will be a post wedding gathering at the Hotel. */}
            Coming Soon
          </h2>
        </div>
        <div className="accom_container">
          <h1>Accommodations</h1>
          <h2>
            {/* There is a large parking lot available at The Farm Bakery and Events for guests to park in. For guests that will be lodging at the Springhill Suites by Marriott, there will be a shuttle service transporting guests from the hotel- 3800 West Drive Center Valley, PA 18034- to The Farm Bakery and Events at 3:30pm. Following the reception, the shuttle will transport guests from the Farm Bakery back to the Springhill Suites by Marriott at 10:00pm.  */}
            Hotel Recomendations
          </h2>
          <div className="hotel_container">
              <div className="hotel">
              <h3>
                SpringHill Suites by Marriott
              </h3>
              <h3>
                1930 John Fries Hwy, Quakertown, PA 18951
              </h3>
              </div>
              <div className="hotel">
              <h3>
                Springhill Suites by Marriott 
              </h3>
              <h3>
                3800 West Drive, Center Valley, PA 18034
              </h3>
              </div>
              <div className="hotel">
              <h3>
                The Washington House Hotel
              </h3>
              <h3>
                136 North Main St. Sellersville, PA 18960
              </h3>
              </div>
              <div className="hotel">
              <h3>
                Homewood Suites by Hilton
              </h3>
              <h3>
                3350 Center Valley Parkway, Center Valley, PA 18034
              </h3>
              </div>
            </div>
          </div>
    </div>
  </>
        
  )}

export default Accomedations;
