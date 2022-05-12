import './App.css';
import Home from './Containers/Home';
import About from './Containers/About';
import Location from './Containers/Location';
import RSVP from './Containers/RSVP';
import AboutUs from './Containers/AboutUs';
import Registry from './Containers/Registry';
import NavDrawer from './Containers/NavDrawer';
import Accomedations from './Containers/Accomedations';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/story" element={<AboutUs />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/accomodations" element={<Accomedations />} />
          </Routes>
        <NavDrawer />
      </Router>
    </>
  );
}

export default App;
