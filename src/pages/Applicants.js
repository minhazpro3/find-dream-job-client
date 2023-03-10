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
import { useGetJobsQuery } from "../features/job/jobApi";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

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

  const { data, isLoading, isError } = useGetJobsQuery();

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
          <Typography>Job post not yet</Typography>
        </Box>
      )}
    </div>
  );
};

export default Applicants;
