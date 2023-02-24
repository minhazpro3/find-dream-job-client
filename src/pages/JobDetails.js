import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SingleJobs from "../components/jobdetails/SingleJobs";
import Navigation from "../components/share/Navigation";
import {
  useGetJobByIdQuery,
  useJobApplyMutation,
} from "../features/job/jobApi";

const JobDetails = () => {
  const { id } = useParams();

  const { user } = useSelector((state) => state.auth);

  console.log(user);
  const { data, isLoading, isError } = useGetJobByIdQuery(id);
  const { position, companyName, _id } = data?.data || {};
  const navigate = useNavigate();
  const [applyJob] = useJobApplyMutation();
  const handleApply = () => {
    if (user?.userRole === "employee") {
      toast.error("Only candidate can be apply");
      return;
    }

    if (user?.userRole === "") {
      navigate("/login");
      return;
    }

    const data = {
      userId: user._id,
      email: user.email,
      jobId: _id,
    };

    applyJob(data);
  };

  return (
    <Box>
      <Navigation />
      <Container>
        {/* <Typography>Single Jobs</Typography>
        <Typography>{position}</Typography>
        <Typography>{companyName}</Typography>
        <Button onClick={handleApply}>Apply</Button> */}
        <SingleJobs />
      </Container>
    </Box>
  );
};

export default JobDetails;
