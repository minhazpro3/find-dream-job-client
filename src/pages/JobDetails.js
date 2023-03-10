import { Box, Button, Skeleton, Typography } from "@mui/material";

import React, { Component } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SingleJobs from "../components/jobdetails/SingleJobs";
import Navigation from "../components/share/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import {
  useGetJobByIdQuery,
  useJobApplyMutation,
} from "../features/job/jobApi";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: theme.spacing(2),
  },
  jobInfo: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(4),
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  },
}));

const JobDetails = () => {
  const { id } = useParams();

  const { user } = useSelector((state) => state.auth);

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
      name: user.userName,
      jobId: _id,
    };

    applyJob(data);
  };

  const classes = useStyles();

  return (
    <Box>
      <Navigation />
      <Container>
        <Box>
          <Container maxWidth="lg" className={classes.container}>
            <Typography variant="h3" gutterBottom>
              Job Profile
            </Typography>
            <Grid container spacing={4}>
              {data?.data.skills ? (
                <Grid item xs={12} sm={4}>
                  <Paper className={classes.paper + " " + classes.jobInfo}>
                    <Typography variant="subtitle1" gutterBottom>
                      {data?.data.companyName}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Job Title
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {data?.data.position}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Job Type
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {data?.data.employType} / {data?.data.location}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Salary
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {data?.data.salaryRange} Monthly
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Location
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      San Francisco, CA
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Required skill
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      {data?.data.skills.map((skill, index) => (
                        <Typography
                          key={index}
                          sx={{ border: 1, borderRadius: "23px", px: 2 }}
                          variant="subtitle1"
                          gutterBottom
                        >
                          {skill}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ) : (
                <Grid item xs={12} sm={4}>
                  <Skeleton variant="rectangular" width="100%" height={550} />
                </Grid>
              )}
              {data?.data.skills ? (
                <Grid item xs={12} sm={8}>
                  <Paper className={classes.paper}>
                    <Typography variant="h5" gutterBottom>
                      Job Description
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent in sapien eu nisi convallis gravida ac sed erat.
                      Nullam eget sapien sodales, fringilla tortor at, posuere
                      magna. Donec hendrerit, velit non mattis viverra, ligula
                      ipsum ultrices massa, a feugiat sapien eros vel nunc.
                      Suspendisse et mauris eget ex cursus malesuada a eu enim.
                      Maecenas blandit ornare elit auctor dignissim. Integer
                      ullamcorper diam quis ligula mattis, non bibendum lorem
                      aliquet. Proin gravida quam vitae nunc suscipit interdum.
                    </Typography>

                    <Button
                      onClick={handleApply}
                      variant="contained"
                      color="primary"
                      // disabled={
                      //   data?.data.applicants.find(
                      //     (mail) => mail.email === user?.email
                      //   )
                      //     ? true
                      //     : false
                      // }
                      className={classes.button}
                    >
                      Apply
                    </Button>
                  </Paper>
                </Grid>
              ) : (
                <Grid item sx={12} sm={8}>
                  <Skeleton variant="rectangular" width="100%" height={250} />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default JobDetails;
