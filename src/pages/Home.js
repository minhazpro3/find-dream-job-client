import React, { Component } from "react";
import Navigation from "./../components/share/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Card } from "@material-ui/core";
import { Box } from "@mui/system";

import { CardActions, CardContent, Container, TextField } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchBox: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <Box sx={{ my: 5 }}>
        <div className={classes.root}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" gutterBottom>
                  Find Your Next Job
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Search thousands of job listings from companies all around the
                  world.
                </Typography>
                <TextField
                  className={classes.searchBox}
                  label="Search Jobs"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src="http://i0.wp.com/jcf.org.bd/jcfwebport/wp-content/uploads/2019/01/jobs.jpg"
                  alt="job search"
                  width="100%"
                />
              </Grid>
            </Grid>
            <Typography variant="h5" gutterBottom>
              Featured Jobs
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      Frontend Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      Backend Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      Data Analyst
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Box>
    </div>
  );
};

export default Home;
