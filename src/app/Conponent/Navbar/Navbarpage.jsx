"use client"
import React, { useState } from 'react'
import { InputBase, Avatar } from '@mui/material'
import SettingsIcon from '@mui/icons-material/settings'

import { AppBar, Toolbar, Typography, styled, Menu, MenuItem } from "@mui/material"
import { Badge, MailIcon, Notifications } from '@mui/icons-material'
import Link from 'next/link'


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "red",
  padding: "0 10px",
  borderRadius: 45,
  width: "40%",

}));

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"

  }


}));
const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"

  }



}));



const navbarpage = () => {
  const [open, setOpen] = useState(false)




  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }} style={{
          cursor: "pointer"
        }}><Link href= "/Friends/friends"></Link>ww-Dev</Typography>
        <SettingsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="search..." /></Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />

          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />

          </Badge>
          <Avatar sx={{
            width: 30,
            height: 30,
          }} scr="/Rectangle 16.png"
            onClick={(e)=> setOpen(true)}

          />


        </Icons>

        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{
            width: 30,
            height: 30,
          }} scr="/Rectangle 16.png" />
          <Typography variant='span'>ToYo</Typography>


        </UserBox>




      </StyledToolbar>
      <Menu id="dome-position-menu"
        aria-labelledby="dome-position-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizantal: 'left',
        }}
        transsformOrigin={{
          vertical: 'top',
          horizantal: 'left',

        }}

      >
        
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>

      </Menu>






    </AppBar>
  )
}

export default navbarpage
