import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { Translate } from "@mui/icons-material";
import { useJobPostMutation } from "../../features/job/jobApi";
import { useNavigate } from "react-router-dom";

const AddPositionForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [inputFields, setInputFields] = useState([]);
  const [postJob, { isLoading, isError }] = useJobPostMutation();
  console.log(inputFields);
  const navigate = useNavigate();
  const addFields = () => {
    let newfield = [];

    setInputFields([...inputFields, newfield]);
  };
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index] = event.target.value;
    setInputFields(data);
  };
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  const onSubmit = (data) => {
    const newData = {
      companyName: data.companyName,
      employType: data.employType,
      experience: data.experience,
      overview: data.introduce,
      location: data.location,
      position: data.position,
      salaryRange: data.salaryRange,
      workLevel: data.workLevel,
      skills: inputFields,
    };
    postJob({ ...newData, applicants: [], queries: [] });
    if (data) {
      navigate("/dashboard");
    }
  };
  return (
    <Box sx={{ mx: "auto", width: "100%" }}>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography sx={{ my: 3, fontWeight: "medium" }} variant="h5">
            Register as a
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Box
                sx={{
                  display: { sm: "flex" },
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "inline-grid", gap: 1 }}>
                  <label style={{ fontWeight: "500", opacity: "80%" }}>
                    {" "}
                    Position
                  </label>
                  <TextField
                    sx={{
                      width: 250,
                      bgcolor: "#fff",
                    }}
                    id="filled-basic"
                    label="e.g: Front end developer"
                    variant="filled"
                    size="small"
                    {...register("position")}
                    type="text"
                    required
                  />
                  <label style={{ fontWeight: "500", opacity: "80%" }}>
                    {" "}
                    Experience
                  </label>
                  <TextField
                    sx={{
                      width: 250,
                      bgcolor: "#fff",
                    }}
                    id="filled-basic"
                    label="e.g: 2 years"
                    variant="filled"
                    size="small"
                    {...register("experience")}
                    type="text"
                    required
                  />
                  <label style={{ fontWeight: "500", opacity: "80%" }}>
                    {" "}
                    Employment Type
                  </label>
                  <TextField
                    sx={{
                      width: 250,
                      bgcolor: "#fff",
                    }}
                    id="filled-basic"
                    label="e.g: Part time"
                    variant="filled"
                    size="small"
                    {...register("employType")}
                    type="text"
                    required
                  />
                </Box>

                <Box sx={{ display: "inline-grid", gap: 1 }}>
                  <label style={{ fontWeight: "500", opacity: "80%" }}>
                    {" "}
                    Company name
                  </label>
                  <TextField
                    sx={{
                      width: 250,
                      bgcolor: "#fff",
                    }}
                    id="filled-basic"
                    label="e.g: love it park"
                    variant="filled"
                    size="small"
                    {...register("companyName")}
                    type="text"
                    required
                  />
                  <label style={{ fontWeight: "500", opacity: "80%" }}>
                    {" "}
                    Work level
                  </label>
                  <TextField
                    sx={{
                      width: 250,
                      bgcolor: "#fff",
                    }}
                    id="filled-basic"
                    label="e.g: medium"
                    variant="filled"
                    size="small"
                    {...register("workLevel")}
                    type="text"
                    required
                  />

                  <label style={{ fontWeight: "500", opacity: "80%" }}>
                    Salary range
                  </label>
                  <TextField
                    sx={{ width: 250, bgcolor: "#fff" }}
                    id="filled-basic"
                    label="e.g: 20k - 40k"
                    variant="filled"
                    size="small"
                    {...register("salaryRange")}
                    type="text"
                    required
                  />

                  {/* <Button
                sx={{ width: { md: 300, sm: 250, xs: 250 } }}
                variant="contained"
                type="submit"
              >
                {" "}
                Submit{" "}
              </Button> */}
                </Box>
              </Box>
              {/* location after textfield */}
              <Box sx={{ display: "inline-grid", gap: 1, width: { sm: 530 } }}>
                <label style={{ fontWeight: "500", opacity: "80%" }}>
                  {" "}
                  Location
                </label>
                <TextField
                  sx={{
                    width: { md: "100%", sm: 250 },
                    bgcolor: "#fff",
                  }}
                  id="filled-basic"
                  label="e.g: mirpur-10, Dhaka"
                  variant="filled"
                  size="small"
                  {...register("location")}
                  type="text"
                  required
                />
                <label style={{ fontWeight: "500", opacity: "80%" }}>
                  {" "}
                  Overview
                </label>
                <TextField
                  sx={{
                    width: { md: "100%", sm: 250 },
                    bgcolor: "#fff",
                  }}
                  id="filled-multiline-static"
                  label="e.g: about job details"
                  multiline
                  rows={4}
                  variant="filled"
                  size="small"
                  {...register("introduce")}
                  type="text"
                  required
                />
                <label style={{ fontWeight: "500", opacity: "80%" }}>
                  {" "}
                  Skills
                </label>
                {inputFields.map((input, index) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: { md: 530, sm: 250, xs: 250 },
                      }}
                      key={index}
                    >
                      <TextField
                        sx={{
                          width: { md: "90%", sm: 250 },
                          bgcolor: "#fff",
                          my: 1,
                        }}
                        id="filled-multiline-static"
                        label="e.g: Reactjs"
                        variant="filled"
                        size="small"
                        onChange={(event) => handleFormChange(index, event)}
                        type="text"
                        required
                      />
                      <IconButton
                        onClick={() => removeFields(index)}
                        aria-label="delete"
                        sx={{ color: "#d50000" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  );
                })}
                <Button
                  sx={{ border: 1, width: { md: 530, sm: 250 } }}
                  onClick={addFields}
                >
                  Add Skill
                </Button>
              </Box>
              <Box sx={{ my: 3 }}>
                <Button
                  sx={{ py: 1, px: 3, width: { md: 530, sm: 250 } }}
                  variant="contained"
                  type="submit"
                >
                  submit
                </Button>
              </Box>{" "}
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddPositionForm;
