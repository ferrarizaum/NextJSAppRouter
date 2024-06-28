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
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import CommentIcon from "@mui/icons-material/Comment";

export interface SidebarProps {
  isSidebarOpen: boolean;
}

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
  const router = useRouter();

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
      <Drawer
        PaperProps={{ sx: { mt: 8 } }}
        open={isSidebarOpen}
        variant="persistent"
      >
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
