import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import './SimpleNavBottom.css'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="About Us" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="RSVP" icon={<EventSeatIcon />} />
      </BottomNavigation>
    </Box>
  );
}