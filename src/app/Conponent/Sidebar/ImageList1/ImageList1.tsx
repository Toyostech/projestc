"use client";
import React from "react";
import {
  Typography,
  ImageListItem,
  ImageList, AvatarGroup,
  Avatar,
} from "@mui/material";

const ImageList1 = () => {
  return (
    <>
      <Typography varient="h6" fontWeight={100}>
        lastest Posts
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src="/img-2.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="/img-2.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="/img-2.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="/img-2.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="/img-2.jpg" />
        </ImageListItem>
      </ImageList>
    </>
  );
};

export default ImageList1;
