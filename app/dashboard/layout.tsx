"use client";
import { Hero, SnippetCard, Dashboard, Sidebar } from "@/components";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stack } from "@mui/material";
import DashboardTopbar from "@/components/dashboard-topbar/DashboardTopbar";
import { Box } from "@mui/material";

const DashboardLayout  = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <Stack direction={'row'}>
          <Sidebar/>
            <Box sx={{display: "flex", flexDirection:"column", alignItems:"center", gap:"4rem", width:"100%", height:"auto"}}>
              <DashboardTopbar />
              {children}
            </Box>   
      </Stack>
  );
};

export default DashboardLayout;
