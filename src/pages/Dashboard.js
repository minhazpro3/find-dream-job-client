import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { logout } from "../features/auth/authSlice";
import auth from "../firebase/firebase.config";
import Navigation from "./../components/share/Navigation";
import WorkIcon from "@mui/icons-material/Work";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

const drawerWidth = 240;

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useSelector((state) => state.auth);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Typography variant="h5"> Hey {user?.userName}</Typography>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <Link style={{ textDecoration: "none" }} to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <List>
        <Link style={{ textDecoration: "none" }} to="/find-jobs">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText>Jobs</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      {user?.userType === "employee" && (
        <Box>
          <List>
            <Link style={{ textDecoration: "none" }} to="add-position">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ContentPasteSearchIcon />
                  </ListItemIcon>
                  <ListItemText>New position</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <List>
            <Link style={{ textDecoration: "none" }} to="applicants">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CircleNotificationsIcon />
                  </ListItemIcon>
                  <ListItemText>Applicants</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      )}

      <List>
        <Link
          onClick={handleSignout}
          style={{ textDecoration: "none" }}
          to="/login"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>

      {/* <Divider /> */}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box>
      {user?.userName ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography>Dashboard</Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Box>
              <Outlet />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Navigation />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              style={{
                textDecoration: "none",
                margin: "20px auto",
                fontSize: "24px",
              }}
              to="/make-profile"
            >
              Please make profile click
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
