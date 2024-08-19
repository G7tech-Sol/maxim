"use client";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

const navItems = ["Tour", "Prices", "About", "F.A.Q.", "Support"];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{ position: "relative", minHeight: "80px !important", paddingX: "6% !important" }}
      >
        <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}>
          Name
        </Typography>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "block" },
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              sx={{ mx: 2, color: theme.palette.primary.main, textDecoration: "none" }}
            >
              {item}
            </Link>
          ))}
        </Box>

        <Box sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
          <Button
            color="primary"
            sx={{ ml: 2, textTransform: "capitalize", fontWeight: "600", fontSize: "16px" }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              ml: 2,
              textTransform: "capitalize",
              fontWeight: "600",
              fontSize: "16px",
              border: "2px solid #EBEAED",
              borderRadius: "100px",
              "&:hover": {
                border: "2px solid",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
          <IconButton color="primary" aria-label="user" sx={{ mr: 1 }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton edge="start" color="primary" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { width: "100%" } }}
        >
          <Box sx={{ position: "relative", width: "100%", p: 2 }}>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <List sx={{ mt: 4 }}>
              {navItems.map((item) => (
                <ListItem button key={item}>
                  <ListItemText
                    primary={item}
                    sx={{
                      mx: 2,
                      color: theme.palette.primary.main,
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  />
                </ListItem>
              ))}

              <ListItem button>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        mx: 2,
                        color: theme.palette.primary.main,
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      Login
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        mx: 2,
                        color: theme.palette.primary.main,
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      Sign Up
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
