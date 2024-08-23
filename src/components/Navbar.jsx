"use client";
import Link from "next/link";
import { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import Buttons from "./Button";

const navItems = [
  { label: "Tour", path: "/tour" },
  { label: "Prices", path: "/prices" },
  { label: "About", path: "/about" },
  { label: "F.A.Q.", path: "/faq" },
  { label: "Support", path: "/support" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          position: "relative",
          minHeight: "80px !important",
          paddingX: "6% !important",
        }}
      >
        <Link href="/" passHref>
          <Typography variant="h5" sx={{ color: "primary.main", fontWeight: "bold" }}>
            Name
          </Typography>
        </Link>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "flex" },
          }}
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.path} passHref>
              <Box
                sx={{
                  mx: 2,
                  color: "primary.main",
                  textDecoration: "none",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "inline-block",
                }}
              >
                <Typography>{item.label}</Typography>
              </Box>
            </Link>
          ))}
        </Box>

        <Box sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
          <Buttons variant="login">Login</Buttons>
          <Buttons variant="greyButton" sx={{ ml: 2 }}>
            Sign Up
          </Buttons>
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
                <Link key={item.label} href={item.path} passHref>
                  <ListItem button component="a">
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            mx: 2,
                            color: "primary.main",
                            fontWeight: "400",
                            fontSize: "16px",
                            textDecoration: "none !important",
                          }}
                        >
                          {item.label}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Link>
              ))}
              <Link href="/login" passHref>
                <ListItem button component="a">
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          mx: 2,
                          color: "primary.main",
                          fontWeight: "600",
                          fontSize: "18px",
                          textDecoration: "none !important",
                        }}
                      >
                        Login
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
              <Link href="/signup" passHref>
                <ListItem button component="a">
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          mx: 2,
                          color: "primary.main",
                          fontWeight: "600",
                          fontSize: "18px",
                          textDecoration: "none !important",
                        }}
                      >
                        Sign Up
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
