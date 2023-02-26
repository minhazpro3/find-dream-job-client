import React from "react";
import { Box } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Paper, Button } from "@material-ui/core";
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
const SingleJobs = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h3" gutterBottom>
          Job Profile
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper + " " + classes.jobInfo}>
              <Typography variant="h5" gutterBottom>
                Job Title
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Senior Software Engineer
              </Typography>
              <Typography variant="h5" gutterBottom>
                Job Type
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Full-time
              </Typography>
              <Typography variant="h5" gutterBottom>
                Location
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                San Francisco, CA
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Job Description
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent in sapien eu nisi convallis gravida ac sed erat. Nullam
                eget sapien sodales, fringilla tortor at, posuere magna. Donec
                hendrerit, velit non mattis viverra, ligula ipsum ultrices
                massa, a feugiat sapien eros vel nunc. Suspendisse et mauris
                eget ex cursus malesuada a eu enim. Maecenas blandit ornare elit
                auctor dignissim. Integer ullamcorper diam quis ligula mattis,
                non bibendum lorem aliquet. Proin gravida quam vitae nunc
                suscipit interdum.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Apply Now
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleJobs;
