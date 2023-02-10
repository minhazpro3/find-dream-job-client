/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { loginUser } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import login from "../../utils/images/login.png";
import Navigation from "./../share/Navigation";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const { isLoading, email, isError, error } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
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
    <Box>
      <Navigation />
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
            <img width={300} src={login} alt="login" />
          </Box>
          <Box
            sx={{
              bgcolor: "#c5cae9",
              p: 3,
              my: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Please Sign in
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
                  {...register("password")}
                  type="password"
                />

                <Button variant="contained" type="submit">
                  Sign in
                </Button>
              </Box>

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                If you new user! <Link to="/register">Sign up</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
