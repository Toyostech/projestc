"use client"
import React from 'react'
import { Box, ListItem, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { InboxIcon } from '@mui/icons-material'
import { Typography, AvatarGroup, Avatar } from "@mui/material"
import ImageList from './ImageList1/ImageList1'
import { useState } from 'react'

const Sidebar = () => {
    const [open, setOpoe] = useState(false)
    return (
        <Box  flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" >
                <Typography varient="h6" fontWeight={100} marginTop={2} marginBottom={2}>OnLine Friends</Typography>

                <AvatarGroup max={4} >
                    <Avatar alt='' src='/Rectangle 16.png' />
                    <Avatar alt='' src='/Rectangle 16.png' />
                    <Avatar alt='' src='/Rectangle 16.png' />
                    <Avatar alt='' src='/Rectangle 16.png' />
                    <Avatar alt='' src='/Rectangle 16.png' />
                    <Avatar alt='' src='' />
                    <Avatar alt='' src='/Rectangle 16.png' />
                    <Avatar alt='' src='/Rectangle 16.png' />
                    <Avatar alt='' src='' />
                    <Avatar alt='' src='/Rectangle 16.png' />
                    <Avatar alt='' src='/Rectangle 16.png' />

                </AvatarGroup>
                <ImageList />


            </Box>
         
           


        </Box>
    )
}

export default Sidebar
