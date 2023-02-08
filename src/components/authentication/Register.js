import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import registerimg from "../../utils/images/signup.png";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { isLoading, email, isError, error } = useSelector(
    (state) => state.auth
  );

  const onSubmit = (data) => {
    if (data.password1 === data.password2) {
      dispatch(createUser({ email: data.email, password: data.password1 }));
    }
  };
  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
      reset();
    }
  }, [!isLoading, email]);

  useEffect(() => {
    if (isError) {
      toast.error(error, {
        position: "top-right",
      });
    }
  }, [isError, error]);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: { md: "flex" },
          justifyContent: "evenly",
          alignItems: "center",
          my: 4,
          gap: 3,
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <img width={350} src={registerimg} alt="login" />
        </Box>
        <Box sx={{ bgcolor: "#c5cae9", p: 3, my: 5 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Please Signup
            </Typography>
            <Box sx={{ display: "inline-grid", gap: 1 }}>
              <TextField
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email")}
                type="email"
              />

              <TextField
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                {...register("password1")}
                type="password"
              />
              <TextField
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                {...register("password2")}
                type="password"
              />
              <Button variant="contained" type="submit">
                Signup
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
