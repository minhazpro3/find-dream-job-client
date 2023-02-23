import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import employee from "../../utils/images/employe.png";
import candidate from "../../utils/images/Candidate.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../../features/auth/authSlice";
import ProfileForm from "./ProfileForm";

const ChooseType = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState("");
  const { userType } = useSelector((state) => state.auth);
  console.log(userType);

  return (
    <Container>
      {userType && userForm ? (
        <ProfileForm setUserForm={setUserForm} />
      ) : (
        <Box>
          <Typography sx={{ textAlign: "center", mt: 2 }} variant="h6">
            Continue as a ...
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={() => setUserForm("next")}>Next &#8594; </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: {
                  sm: "flex",
                  justifyContent: "evenly",
                  gap: 12,
                },
              }}
            >
              <Box
                onClick={() => dispatch(setUserType("candidate"))}
                sx={{
                  boxShadow: "0px 0px 10px 6px #e0e0e0",
                  width: { md: 400, sm: 300, xs: 250 },
                  height: { md: 420, sm: 320, xs: 280 },
                  border: userType === "candidate" && 2,
                  borderColor: userType === "candidate" && "#008000",
                  py: 4,
                  px: { xs: 3, sm: 4 },
                  "&:hover": {
                    cursor: "pointer",
                    height: { md: 425, sm: 325, xs: 283 },
                    "& .image": {
                      width: { md: 405, sm: 305, xs: 253 },
                      height: { md: 405, sm: 305, xs: 253 },
                    },
                  },
                }}
              >
                <CardMedia
                  className="image"
                  sx={{
                    width: { md: 400, sm: 300, xs: 250 },
                    height: { md: 400, sm: 300, xs: 250 },
                  }}
                  component="img"
                  image={candidate}
                  alt="Paella dish"
                />
                <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
                  Candidate
                </Typography>
              </Box>

              <Box
                onClick={() => dispatch(setUserType("employee"))}
                sx={{
                  boxShadow: "0px 0px 10px 6px #e0e0e0",
                  width: { md: 400, sm: 300, xs: 250 },
                  height: { md: 420, sm: 320, xs: 280 },
                  border: userType === "employee" && 2,
                  borderColor: userType === "employee" && "#008000",
                  py: 4,
                  px: { xs: 3, sm: 4 },
                  mt: { xs: 2, sm: 0 },
                  "&:hover": {
                    cursor: "pointer",
                    height: { md: 425, sm: 325, xs: 283 },
                    "& .image": {
                      width: { md: 405, sm: 305, xs: 253 },
                      height: { md: 405, sm: 305, xs: 253 },
                    },
                  },
                }}
              >
                <CardMedia
                  className="image"
                  sx={{
                    width: { md: 400, sm: 300, xs: 250 },
                    height: { md: 400, sm: 300, xs: 250 },
                  }}
                  component="img"
                  image={employee}
                  alt="Paella dish"
                />
                <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
                  Employee
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default ChooseType;
