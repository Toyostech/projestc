import React from 'react'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";


const Pages = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton component="a">
          <ListItemIcon>
            <AutoStoriesIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default Pages