import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Link from "next/link";

const Friends = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Diversity1Icon />
          </ListItemIcon>
          <Link href="/Sittings">Setting</Link>
          {/* <ListItemText primary="Friends" /> */}
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default Friends;
