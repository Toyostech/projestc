"use client"
import React from 'react'
import { Box } from "@mui/material"
import { ListItem, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home } from '@mui/icons-material'
import Friends from "../../Conponent/Rightbar/Friends/Friends"
import Setting from "../../Conponent/Rightbar/Setting/Setting"
import Profile from "../../Conponent/Rightbar/Profile/Profile"
import Marketplace from "../../Conponent/Rightbar/Marketplace/Marketplace"
import Pages from "../../Conponent/Rightbar/Pages/Pages"
import Switch from "./switch/SwitchControl"





const Rightbar = ({mode , setMode}) => {
  return (
    <Box flex={1} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>

      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a"
              hraf="#home">
              <ListItemIcon>
                <Home />


              </ListItemIcon>
              <ListItemText primary="Homepage" />


            </ListItemButton>
          </ListItem>
          <Friends />
          <Setting />
          <Marketplace />
          <Pages />
          <Profile />
          <Switch mode={mode} setMode= {setMode} />
        </List>

      </Box>

     
    </Box>
  )
}

export default Rightbar
