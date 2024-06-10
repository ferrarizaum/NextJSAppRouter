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
import React from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        Open
      </IconButton>
      <Drawer open={open} variant="persistent" anchor="left">
        <IconButton sx={{ mt: 2 }} onClick={handleDrawerClose}>
          Close
        </IconButton>
        <List sx={{ m: 2, p: 2 }}>
          {["Home", "Todos", "Comments"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary={text}
                  onClick={() =>
                    text === "Home"
                      ? router.push("/")
                      : router.push(`/${text.toLowerCase()}`)
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
