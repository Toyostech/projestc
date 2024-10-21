import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Link from "next/navigation";
const Marketplace = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
         
          <ListItemText primary="MarketPlace" />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default Marketplace;
