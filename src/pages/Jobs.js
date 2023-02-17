import React from "react";
import { useGetJobsQuery } from "../features/job/jobApi";
import { Box, Button, Container, Typography } from "@mui/material";
import Navigation from "./../components/share/Navigation";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const { data, isLoading, isError } = useGetJobsQuery();
  const navigate = useNavigate();
  console.log(data);
  return (
    <Box>
      <Navigation />
      <Container>
        <Box>
          <Typography>Jobs</Typography>
        </Box>
        {data?.data?.map((position, index) => (
          <Box key={index}>
            <Typography>{position?.position}</Typography>
            <Typography>{position?.companyName}</Typography>
            <Button
              onClick={() => navigate(`/job-details/${position._id}`)}
              variant="filled"
            >
              Details
            </Button>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Jobs;
