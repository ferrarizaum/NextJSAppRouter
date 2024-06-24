"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/globals.css";
import { Box } from "@mui/material";
import Appbar from "@/components/Appbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Appframe({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <Box>
      <Box>
        <Appbar handleClick={handleClick} isSidebarOpen={isSidebarOpen} />
      </Box>
      <Box>
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </Box>
      <Box sx={{ ml: isSidebarOpen ? 30 : 0 }}>{children}</Box>
    </Box>
  );
}
