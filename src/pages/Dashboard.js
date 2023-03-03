import {
  AppBar,
  Box,
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
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link, Outlet } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useSelector((state) => state.auth);

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
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link style={{ textDecoration: "none" }} to="/">
                {" "}
                Home{" "}
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      {user?.userType === "employee" ? (
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText>
                {" "}
                <Link style={{ textDecoration: "none" }} to="add-position">
                  {" "}
                  add new position{" "}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContentPasteSearchIcon />
              </ListItemIcon>
              <ListItemText>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/find-jobs">
                  {" "}
                  Find jobs{" "}
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      )}

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link style={{ textDecoration: "none" }} to="/login">
                {" "}
                Logout{" "}
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
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
  );
};

export default Dashboard;
