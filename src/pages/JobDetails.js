import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/share/Navigation";
import { useGetJobByIdQuery } from "../features/job/jobApi";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError } = useGetJobByIdQuery(id);
  const { position, companyName } = data?.data || {};
  return (
    <Box>
      <Navigation />
      <Container>
        <Typography>Single Jobs</Typography>
        <Typography>{position}</Typography>
        <Typography>{companyName}</Typography>
      </Container>
    </Box>
  );
};

export default JobDetails;
