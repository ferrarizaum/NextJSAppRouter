"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ArrowBack } from "@mui/icons-material";

interface AppbarProps {
  handleClick: (event?: React.MouseEvent<HTMLDivElement>) => void;
  isSidebarOpen: boolean;
}

export default function Appbar({ handleClick, isSidebarOpen }: AppbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => handleClick()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {isSidebarOpen ? <ArrowBack /> : <ArrowForwardIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDo and Comment Center
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
