import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserType } from "../../features/auth/authSlice";
import { useRegisterMutation } from "../../features/auth/authApi";

const ProfileForm = ({ setUserForm }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postUser, { isLoading, isError }] = useRegisterMutation();

  const { userType, email } = useSelector((state) => state.auth);
  const onSubmit = (data) => {
    const newData = {
      userName: data.userName,
      email: email,
      companyName: data.companyName,
      companyCategory: data.companyCategory,
      employees: data.employees,
      gender: data.gender,
      userRole: userType,
      yourPosition: data.userPosition,
    };

    dispatch(postUser(newData));
  };

  const handleBack = () => {
    dispatch(setUserType(""));
    setUserForm("");
  };
  return (
    <Box
      sx={{
        my: 5,
        bgcolor: "#e0e0e0",
        pb: { md: 12, sm: 8, xs: 4 },
        pt: { md: 4, sm: 4, xs: 2 },
        borderRadius: "16px",
      }}
    >
      <Button sx={{ mx: 2 }} onClick={handleBack}>
        &#8592; Previous
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "start",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography sx={{ my: 3, fontWeight: "medium" }} variant="h5">
            Register as a {userType}
          </Typography>
          <Box
            sx={{
              display: { sm: "flex", xs: "inline-grid" },
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box sx={{ display: "inline-grid", gap: 1 }}>
              <label style={{ fontWeight: "600", opacity: "80%" }}> Name</label>
              <TextField
                sx={{
                  width: { md: 300, sm: 250, xs: 250 },
                  bgcolor: "#fff",
                }}
                label=" Name"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                {...register("userName")}
                type="text"
                required
              />
              <label style={{ fontWeight: "600", opacity: "80%" }}>
                {" "}
                Email
              </label>
              <TextField
                sx={{ width: { md: 300, sm: 250, xs: 250 }, bgcolor: "#fff" }}
                label="Email"
                id="outlined-size-small"
                disabled
                variant="outlined"
                size="small"
                {...register("userEmail")}
                type="email"
              />
              <label style={{ fontWeight: "600", opacity: "80%" }}>
                Name of company
              </label>
              <TextField
                sx={{ width: { md: 300, sm: 250, xs: 250 }, bgcolor: "#fff" }}
                label="Name of company"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                {...register("companyName")}
                type="text"
                required
              />
              <label style={{ fontWeight: "600", opacity: "80%" }}>
                Type of company
              </label>
              <TextField
                sx={{ width: { md: 300, sm: 250, xs: 250 }, bgcolor: "#fff" }}
                id="outlined-size-small"
                select
                label="Company's category"
                //   helperText="Please select your currency"
                size="small"
                {...register("companyCategory")}
                required
              >
                <MenuItem value="automotive">Automotive</MenuItem>
                <MenuItem value="Software">Software</MenuItem>
                <MenuItem value="Marketing">marketing</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ display: "inline-grid", gap: 1, alignSelf: "flex-end" }}>
              <label style={{ fontWeight: "600", opacity: "80%" }}>
                Number of employee
              </label>
              <TextField
                sx={{ width: { md: 300, sm: 250, xs: 250 }, bgcolor: "#fff" }}
                id="outlined-size-small"
                select
                label="Number of employee"
                size="small"
                {...register("employees")}
                required
              >
                <MenuItem value="1-10">1-10</MenuItem>
                <MenuItem value="11-50">11-50</MenuItem>
                <MenuItem value="51-100">51-100</MenuItem>
              </TextField>
              <Box sx={{ width: { md: 300, sm: 250, xs: 250 } }}>
                <label style={{ fontWeight: "600", opacity: "80%" }}>
                  Gender
                </label>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    size="small"
                    {...register("gender")}
                    required
                    variant="body2"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    size="small"
                    {...register("gender")}
                    required
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                    size="small"
                    {...register("gender")}
                    required
                  />
                </RadioGroup>
              </Box>
              <label style={{ fontWeight: "600", opacity: "80%" }}>
                Your role in company
              </label>
              <TextField
                sx={{ width: { md: 300, sm: 250, xs: 250 }, bgcolor: "#fff" }}
                label="Your role in company"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                {...register("userPosition")}
                type="text"
                required
              />

              <Button
                sx={{ width: { md: 300, sm: 250, xs: 250 } }}
                variant="contained"
                type="submit"
              >
                {" "}
                Submit{" "}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ProfileForm;
