import React from 'react'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";

import Switch from "@mui/material/Switch";

const SwitchControl = ({mode, setMode}) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton component="a">
          <ListItemIcon>
            <ModeNightIcon />
          </ListItemIcon>
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            inputProps={{ "aria-label": "controlled" }}
          />
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default SwitchControl