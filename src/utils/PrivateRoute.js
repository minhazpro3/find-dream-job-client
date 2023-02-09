import React from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { email, isLoading } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  console.log(isLoading);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
