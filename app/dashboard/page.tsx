"use client";
import { Hero, SnippetCard, Dashboard, Sidebar } from "@/components";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stack } from "@mui/material";
import DashboardTopbar from "@/components/dashboard-topbar/DashboardTopbar";
import { Box } from "@mui/material";

const page = () => {
  return (
    <Dashboard />
  );
};

export default page;
