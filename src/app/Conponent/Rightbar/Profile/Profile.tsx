import React from 'react'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";


const Profile = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton component="a">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Market" />
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default Profile