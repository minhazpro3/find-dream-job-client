import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Typography,
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { Box } from "@mui/material";
import Navigation from "./../share/Navigation";
import EditIcon from "@mui/icons-material/Edit";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  name: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  card: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" spacing={4}>
      <Grid item>
        <Avatar className={classes.avatar} src="/avatar.png" />
      </Grid>
      <Grid item>
        <Typography variant="h4" className={classes.name}>
          John Doe
        </Typography>
      </Grid>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            color: "#0d47a1",
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          <EditIcon />
          <Typography>Edit Profile</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.card}>
          <CardHeader title="About Me" />
          <CardContent>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
              posuere elit, in vestibulum orci. Aliquam hendrerit, lorem sit
              amet aliquam efficitur, nunc arcu faucibus lectus, ac semper leo
              enim eu eros.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.card}>
          <CardHeader title="Education" />
          <CardContent>
            <Typography variant="h6">University of XYZ</Typography>
            <Typography variant="subtitle1">
              Bachelor of Science in Computer Science, 2010-2014
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
              posuere elit, in vestibulum orci. Aliquam hendrerit, lorem sit
              amet aliquam efficitur, nunc arcu faucibus lectus, ac semper leo
              enim eu eros.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.card}>
          <CardHeader title="Work Experience" />
          <CardContent>
            <Typography variant="h6">Google</Typography>
            <Typography variant="subtitle1">
              Software Engineer, 2014-2018
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
              posuere elit, in vestibulum orci. Aliquam hendrerit, lorem sit
              amet aliquam efficitur, nunc arcu faucibus lectus, ac semper leo
              enim eu eros.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
