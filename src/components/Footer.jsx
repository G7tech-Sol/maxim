"use client";
import { Typography, Link, Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const FooterComp = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Footer = () => {
  const theme = useTheme();
  const navItems = ["Tour", "Prices", "About", "F.A.Q.", "Support"];
  return (
    <FooterComp>
      {navItems.map((item) => (
        <Link
          key={item}
          href="#"
          sx={{ mx: 1, color: theme.palette.primary.main, textDecoration: "none", fontWeight: 500 }}
        >
          {item}
        </Link>
      ))}
      <Typography variant="caption" display="block" sx={{ m: 2, color: "#15143966" }}>
        © 2024 Designmodo. All rights reserved.
      </Typography>
    </FooterComp>
  );
};

export default Footer;
