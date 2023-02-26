import React from "react";
import login from "../utils/images/login.png";
import Navigation from "./../components/share/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  banner: {
    height: "calc(100vh - 64px)", // Subtract the height of the app bar
    background: "linear-gradient(to bottom right, #2B2E4A, #1C1F2E)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 56px)", // Subtract the height of the mobile app bar
    },
  },
  bannerContent: {
    textAlign: "center",
    color: "white",
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    fontSize: "4rem",
    textShadow: "0px 0px 5px rgba(0,0,0,0.5)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    fontSize: "1.5rem",
    textShadow: "0px 0px 5px rgba(0,0,0,0.5)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  },
  button: {
    marginTop: theme.spacing(3),
    borderRadius: "30px",
    textTransform: "none",
    backgroundColor: "#FF7BAC",
    color: "white",
    boxShadow: "0px 0px 10px rgba(255,123,172,0.5)",
    "&:hover": {
      backgroundColor: "#FF4D9D",
    },
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    borderRadius: "50px",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(1),
    },
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    width: "24px",
    height: "24px",
    color: "#707070",
  },
  searchText: {
    flexGrow: 1,
    border: "none",
    outline: "none",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  arrowIcon: {
    marginLeft: theme.spacing(2),
    width: "32px",
    height: "32px",
    color: "white",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <Box>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} className={classes.banner}>
              <div className={classes.bannerContent}>
                <Typography variant="h1" className={classes.title}>
                  Find Your Dream Job
                </Typography>
                <Typography variant="h2" className={classes.subtitle}>
                  Search Thousands of Jobs Worldwide
                </Typography>
                <Button variant="contained" className={classes.button}>
                  Start Your Job Search
                </Button>
                <div className={classes.searchBox}>
                  <SearchIcon className={classes.searchIcon} />

                  <input
                    type="text"
                    placeholder="Enter a Job Title or Company Name"
                    className={classes.searchText}
                  />
                  <ArrowBackIcon className={classes.arrowIcon} />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default Home;
