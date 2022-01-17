import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import './SimpleNavBottom.css'

export default function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);

  const handleClick = e => {
    props.handleCallback(e);
  }

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={handleClick} id="home" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={handleClick} id="location" label="Location" icon={<LocationOnIcon />} />
        <BottomNavigationAction onClick={handleClick} id="about" label="About Us" icon={<FavoriteIcon />} />
        <BottomNavigationAction onClick={handleClick} id="rsvp" label="RSVP" icon={<EventSeatIcon />} />
        <BottomNavigationAction onClick={handleClick} id="registry" label="Registry" icon={<ModeStandbyIcon />} />
      </BottomNavigation>
    </Box>
  );
}