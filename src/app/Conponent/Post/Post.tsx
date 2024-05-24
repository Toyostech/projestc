"use client"
import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardActions,
  
  IconButton,
  Typography,
  CardContent,
  Avatar,
} from "@mui/material";
import {CardMedia} from "@mui/material"

import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CheckBox, FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <Card sx={{ margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ background: "red" }} aria-label="recipe ">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="setting">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo paella"
        subheader="September 14, 2106"
      />
      <CardMedia
        component="img"
        height="20%"
        
     
        image="/Rectangle 16.png"
        alt="paella dish"
      />
      <CardContent>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          delectus quasi alias nisi, explicabo necessitatibus saepe! Quod eaque
          doloremque dignissimos, iusto non perferendis tempora maiores vero
          ipsum eveniet pariatur quia soluta ratione, laboriosam asperiores?
          Possimus voluptatibus accusantium perferendis minima ullam illo unde
          fugit sit esse delectus omnis voluptas totam odit doloremque commodi,
          vitae quasi laboriosam nobis provident debitis quibusdam
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to  favorite">
          <CheckBox
            icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{ color: "red" }}/>}/>
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    // <Card>
    //   <CardHeader
    //     avatar={
    //       <Avatar sx={{ background: "red" }} aria-label="recipe ">
    //         R
    //       </Avatar>
    //     }
    //     action={
    //       <IconButton aria-label="setting">
    //         <MoreVertIcon />
    //       </IconButton>
    //     }
    //     title="Shrimp and Chorizo paella"
    //     subheader="September 14, 2016"
    //   />
    //   <CardMedia
    //     height="20%"
    //     image="/Rectangle 16.png"
    //     alt="paella dish"
    //   />
    //   <CardContent>
    //     <Typography variant="h6">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
    //       delectus quasi alias nisi, explicabo necessitatibus saepe! Quod eaque
    //       doloremque dignissimos, iusto non perferendis tempora maiores vero
    //       ipsum eveniet pariatur quia soluta ratione, laboriosam asperiores?
    //       Possimus voluptatibus accusantium perferendis minima ullam illo unde
    //       fugit sit esse delectus omnis voluptas totam odit doloremque commodi,
    //       vitae quasi laboriosam nobis provident debitis quibusdam
    //     </Typography>
    //   </CardContent>
    //   <CardActions disableSpacing>
    //     <IconButton aria-label="add to  favorite">
    //       <CheckBox
    //         icon={<FavoriteBorder />}
    //         checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
    //       />
    //     </IconButton>
    //     <IconButton>
    //       <ShareIcon />
    //     </IconButton>
    //   </CardActions>
    // </Card>
  );
};

export default Post;
