import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { ListItemIcon, ListItemText } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import {Link} from 'react-router-dom';
import '../Styles/SimpleNavBottom.css'


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
      console.log('clicked')
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem component={Link} to="/about" button key={'about'}>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem component={Link} to="/location" button key={'location'}>
            <ListItemIcon>
                <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={'Location'} />
          </ListItem>
          <ListItem component={Link} to="/rsvp" button key={'rsvp'}>
            <ListItemIcon>
                <EventSeatIcon />
            </ListItemIcon>
            <ListItemText primary={'RSVP'} />
          </ListItem>
          <ListItem component={Link} to="/story" button key={'ourStory'}>
            <ListItemIcon>
                <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary={'Our Story'} />
          </ListItem>
          <ListItem component={Link} to="/registry" button key={'registry'}>
            <ListItemIcon>
                <ModeStandbyIcon />
            </ListItemIcon>
            <ListItemText primary={'Registry'} />
          </ListItem>
          <ListItem component={Link} to="/accomodations" button key={'accomedations'}>
            <ListItemIcon>
                <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary={'Accommodations'} />
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 10, right: 10}}
                icon={<SpeedDialIcon />}
                onClick={toggleDrawer('bottom', true)}
            >
            </SpeedDial>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            className="swipeable_drawer"
            >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    
    </div>

  );
}