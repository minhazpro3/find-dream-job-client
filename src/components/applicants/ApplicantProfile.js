/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useGetUserByIdQuery } from "../../features/auth/authApi";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import resume from "../../utils/images/resume.jpg";
import linkedin from "../../utils/images/linkedin.png";
import website from "../../utils/images/web.png";
import { Divider } from "@mui/material";
import profile from "../../utils/images/profile.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(2),
  },
  progress: {
    marginBottom: theme.spacing(2),
  },
}));

const ApplicantProfile = () => {
  const { id } = useParams();
  const classes = useStyles();
  const { data, isLoading, isError } = useGetUserByIdQuery(id);
  console.log(data);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Applicant Photo"
                src={profile}
                className={classes.avatar}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" className={classes.title}>
                {data?.data.userName}
              </Typography>
              <Typography variant="body1" className={classes.title}>
                Sex: {data?.data.gender}
              </Typography>
            </Box>
            <Typography variant="subtitle1" className={classes.subtitle}>
              {data?.data.email}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              {data?.data.phone}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle2">Address</Typography>
              <Typography variant="subtitle2">City</Typography>
              <Typography variant="subtitle2">Country</Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="subtitle2">{data?.data.address}</Typography>
              <Typography variant="subtitle2">{data?.data.city}</Typography>
              <Typography variant="subtitle2">{data?.data.country}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography>
                <a target="_blank" href={data?.data.resume}>
                  <img
                    width="30px"
                    height="30px"
                    src={resume}
                    alt="resume"
                    loading="lazy"
                  />
                </a>
              </Typography>
              <Typography>
                <a target="_blank" href={data?.data.linkedin}>
                  <img
                    width="30px"
                    height="30px"
                    src={linkedin}
                    alt="linkedin"
                    loading="lazy"
                  />
                </a>
              </Typography>
              <Typography>
                <a target="_blank" href={data?.data.website}>
                  <img
                    width="30px"
                    height="30px"
                    src={website}
                    alt="linkedin"
                    loading="lazy"
                  />
                </a>
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
              Skills
            </Typography>
            {/* {profile.skills.map((skill) => (
              <Typography
                key={skill}
                variant="subtitle1"
                className={classes.subtitle}
              >
                {skill}
              </Typography>
            ))} */}
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reactjs, Nodejs, Html, Css, Bootstrap, TailwindCss, Meterial UI,
              Firebase, Expressjs, JavaScript
            </Typography>
            <Typography variant="h5" className={classes.title}>
              Education
            </Typography>
            {/* {profile.education.map((edu) => (
              <Typography
                key={edu.school}
                variant="subtitle1"
                className={classes.subtitle}
              >
                {edu.school} - {edu.degree} ({edu.graduationYear})
              </Typography>
            ))} */}
            <Typography variant="subtitle1" className={classes.subtitle}>
              typically encompasses knowledge about global development
              processes. The regional and cultural relationships are linked by a
              multidisciplinary perspective.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicantProfile;
