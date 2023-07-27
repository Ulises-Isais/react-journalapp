import { Box, Toolbar } from "@mui/material";
import React from "react";
import { BarNav, SideBar } from "../components";

const drawerWidth = 280;
export const JournalLayout = ({ children }) => {
  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      sx={{ display: "flex" }}
    >
      <BarNav drawerWidth={drawerWidth} />

      <SideBar drawerwidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
