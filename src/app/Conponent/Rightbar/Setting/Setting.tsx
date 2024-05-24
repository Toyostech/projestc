import React from 'react'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {  Settings} from "@mui/icons-material";


const Setting = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton component="a">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default Setting
