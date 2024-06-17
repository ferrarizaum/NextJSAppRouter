"use client";

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { ReactElement } from "react";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import CommentIcon from "@mui/icons-material/Comment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  interface MenuItem {
    name: string;
    path: string;
    icon: ReactElement;
  }

  const menuItems: MenuItem[] = [
    { name: "Home", path: "/", icon: <HomeIcon /> },
    { name: "Todos", path: "/todos", icon: <TaskIcon /> },
    { name: "Comments", path: "/comments", icon: <CommentIcon /> },
  ];

  return (
    <>
      <IconButton
        color="inherit"
        aria-label={open ? "close drawer" : "open drawer"}
        onClick={open ? handleDrawerClose : handleDrawerOpen}
        edge="start"
        sx={{ mr: 2 }}
      >
        {open ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </IconButton>
      <Drawer open={open} variant="persistent" anchor="left">
        <IconButton sx={{ mt: 2, mr: 20 }} onClick={handleDrawerClose}>
          <ArrowBackIcon />
        </IconButton>
        <List sx={{ m: 2, p: 2 }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => router.push(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
