 "use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbarpage from "@/app/Conponent/Navbar/Navbarpage";
import Rightbar from "@/app/Conponent/Rightbar/Rightbar";
import Feeds from "@/app/Conponent/Feeds/Feeds";
import { useState } from "react";

import Sidebar from "@/app/Conponent/Sidebar/Sidebar";
import {
  Box,
  Container,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Palette } from "@mui/icons-material";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbarpage />

            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Rightbar setMode={setMode} mode={mode} />
              <Feeds />
              <Sidebar />
              
              
            </Stack>
          </Box>
        </ThemeProvider>

        {children}
      </body>
    </html>
  );
}
