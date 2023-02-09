import React from "react";
import { Typography } from "@mui/material";
import ChooseType from "../components/makeProfile/ChooseType";
import { useSelector } from "react-redux";
import UpdateProfile from "../components/makeProfile/UpdateProfile";

const MakeProfile = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return <div>{user?.email ? <UpdateProfile /> : <ChooseType />}</div>;
};

export default MakeProfile;
