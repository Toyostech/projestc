"use client";
import React from "react";
import Post from "../Post/Post";
import { Box } from "@mui/material";

const Feeds = () => {
  return (
    <Box flex={4} p={2} spacing={3}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feeds;
