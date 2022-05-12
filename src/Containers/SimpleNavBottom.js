import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import '../Styles/SimpleNavBottom.css'
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);

  return (
    <Box className='bottomNav' sx={{ width: 500 }}>
      <BottomNavigation
        
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} to="/about" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to="/location" label="Location" icon={<LocationOnIcon />} />
        <BottomNavigationAction component={Link} to="/story" label="About Us" icon={<FavoriteIcon />} />
        <BottomNavigationAction component={Link} to="/rsvp" label="RSVP" icon={<EventSeatIcon />} />
        <BottomNavigationAction component={Link} to="/registry" label="Registry" icon={<ModeStandbyIcon />} />
        <BottomNavigationAction component={Link} to="/accomodations" label="Accomodations" icon={<LocationCityIcon />} />
      </BottomNavigation>
    </Box>
  );
}