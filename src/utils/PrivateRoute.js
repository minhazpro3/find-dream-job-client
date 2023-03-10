import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import Navigation from "../components/share/Navigation";

const PrivateRoute = ({ children }) => {
  const { email, isLoading } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  if (isLoading) {
    return (
      <Box>
        <Navigation />
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
