import React, { Component } from "react";
import { Typography } from "@mui/material";
import ChooseType from "../components/makeProfile/ChooseType";
import { useSelector } from "react-redux";
import UpdateProfile from "../components/makeProfile/UpdateProfile";
import { useNavigate } from "react-router-dom";
import Navigation from "./../components/share/Navigation";

const MakeProfile = () => {
  const { user, routeChange } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (routeChange) {
    navigate("/dashboard");
  }

  return (
    <div>
      <Navigation />
      {user?.email ? <UpdateProfile /> : <ChooseType />}
    </div>
  );
};

export default MakeProfile;
