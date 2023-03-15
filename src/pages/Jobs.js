import React, { Component } from "react";
import { useGetJobsQuery } from "../features/job/jobApi";
import { Box, Button, Container, Grid, Typography, Item } from "@mui/material";
import Navigation from "./../components/share/Navigation";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { data, isLoading, isError } = useGetJobsQuery({
    pollingInterval: 1000,
  });
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <Box>
      <Navigation />
      {user ? (
        <Container>
          <Box
            sx={{
              my: { sm: 3, xs: 2 },
              py: { sm: 4, xs: 2 },
              bgcolor: "#d7ccc8",
              borderRadius: 3,
            }}
          >
            <Typography sx={{ px: 2 }} variant="h4">
              Find your <span style={{ color: "#d84315" }}>Dream </span>
              Jobs
            </Typography>
          </Box>

          {data?.data.length ? (
            <Grid container spacing={{ xs: 2, sm: 6 }}>
              {data?.data.map((position, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Box sx={{ bgcolor: "#e3f2fd", p: 2, borderRadius: "10px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            border: "1px solid #42a5f5",
                            px: 2,

                            borderRadius: "25px",
                          }}
                          variant="h6"
                        >
                          {position?.position}
                        </Typography>
                        <Typography sx={{ px: 2, my: 1 }}>
                          by {position?.companyName}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>{position?.location}</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            sx={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "10px",
                              bgcolor: `${
                                position.location === "remote"
                                  ? "#d50000"
                                  : " #00c853"
                              }`,

                              mr: 1,
                            }}
                          ></Typography>
                          <Typography variant="body2">Active </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        my: 1,
                      }}
                    >
                      <Box>
                        <Typography sx={{ px: 2 }}>
                          {position?.employType}
                        </Typography>
                      </Box>
                      <Button
                        sx={{ border: "1px solid #" }}
                        onClick={() =>
                          navigate(`/job-details/${position?._id}`)
                        }
                        variant="outlined"
                      >
                        Details
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <Typography>No job post yet</Typography>
            </Box>
          )}
        </Container>
      ) : (
        <Box sx={{ textAlign: "center", my: 6 }}>
          <Typography variant="h5">Your have to make profile</Typography>
          <Link style={{ textDecoration: "none" }} to="/make-profile">
            click
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Jobs;
