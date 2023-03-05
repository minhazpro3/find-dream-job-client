import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Button } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { logout } from "../../features/auth/authSlice";

const pages = [
  {
    id: 1,
    Page: "Home",
    route: "/",
  },
  {
    id: 2,
    Page: "Jobs",
    route: "/find-jobs",
  },

  {
    id: 3,
    Page: "Services",
    route: "/",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();
  const { email, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Will Jobs
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flow", md: "none" },
              }}
            >
              <Grid container direction="column">
                <MenuItem>
                  <Link style={{ textDecoration: "none" }} to="/">
                    {" "}
                    <Typography sx={{ px: 1 }}>Home</Typography>
                  </Link>
                </MenuItem>
                {user?.email && (
                  <MenuItem>
                    <Link style={{ textDecoration: "none" }} to="find-jobs">
                      {" "}
                      <Typography sx={{ px: 1 }}>Jobs</Typography>
                    </Link>
                  </MenuItem>
                )}
                <MenuItem>
                  <Link style={{ textDecoration: "none" }} to="#">
                    {" "}
                    <Typography sx={{ px: 1 }}>Services</Typography>
                  </Link>
                </MenuItem>
              </Grid>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Will Jobs
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 1,
              mx: 1,
            }}
          >
            {/* {pages.map((page) => (
              <Typography
                key={page.id}
                onClick={handleCloseNavMenu}
                variant="subtitle1"
                sx={{ cursor: "pointer" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={page.route}
                >
                  {" "}
                  {page?.Page}
                </Link>
              </Typography>
            ))} */}
          </Box>
          {user?.email ? (
            <Box sx={{ mx: 1 }}>
              {/* <Typography
                sx={{
                  mx: 1,
                  px: 2,
                  py: 1,
                  bgcolor: "#f344",
                  borderRadius: "20px",
                }}
              >
                {" "}
                <Link style={{ textDecoration: "none" }} to="/make-profile">
                  Update Profile
                </Link>
              </Typography> */}
            </Box>
          ) : (
            <Box sx={{ mx: 1 }}>
              <Typography
                sx={{
                  mx: 1,
                  px: 2,
                  py: 1,
                  bgcolor: "#f344",
                  borderRadius: "20px",
                }}
              >
                {" "}
                <Link style={{ textDecoration: "none" }} to="/make-profile">
                  Get Start
                </Link>
              </Typography>
            </Box>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", px: 12 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Grid container direction="column">
                <MenuItem>
                  <Typography sx={{ px: 2 }} textAlign="center">
                    <Link style={{ textDecoration: "none" }} to="/dashboard">
                      Dashboard
                    </Link>
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  {email ? (
                    <Typography
                      sx={{ px: 2 }}
                      onClick={handleSignout}
                      textAlign="center"
                    >
                      Logout
                    </Typography>
                  ) : (
                    <Typography sx={{ px: 2 }} textAlign="center">
                      <Link to="login">Login</Link>
                    </Typography>
                  )}
                </MenuItem>
              </Grid>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
