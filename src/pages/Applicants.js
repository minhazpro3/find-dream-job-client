import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import { useGetJobByEmailQuery, useGetJobsQuery } from "../features/job/jobApi";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Applicants = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError } = useGetJobByEmailQuery(user.email);

  console.log(data);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Applicants List</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Job Details</Typography>
        </Grid>
      </Grid>
      <Divider />
      {data?.data.length ? (
        <List>
          {data?.data.map((applicant, index) => (
            <React.Fragment key={index}>
              <ListItem
                onClick={() =>
                  navigate(`/dashboard/applicant-details/${applicant._id}`)
                }
                style={{ cursor: "pointer" }}
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar className={classes.avatar} src={applicant.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={applicant.position}
                  secondary={applicant.employType}
                >
                  {applicant.location}
                </ListItemText>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Box sx={{ textAlign: "center", my: 6 }}>
          <Typography>You do not have job post</Typography>
        </Box>
      )}
    </div>
  );
};

export default Applicants;
