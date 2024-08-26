"use client";
import { Typography, Link, Box, Grid } from "@mui/material";
import BackToTop from "./BackToTop";

const Footer = () => {
  const navItems = ["Tour", "Prices", "About", "F.A.Q.", "Support"];
  return (
    <>
      <Box sx={{ paddingX: "6% !important" }}>
        <Grid item xs={12}>
          <BackToTop variant="noBordered" sx={{ mt: 5 }} />
        </Grid>

        <Box
          sx={{
            textAlign: "center",
            paddingTop: { xs: "110px", md: "150px", lg: "150px" },
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              sx={{
                mx: { xs: 1, sm: 4, md: 4, lg: 4 },
                fontSize: "18px",
                color: "primary.main",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {item}
            </Link>
          ))}
          <Typography variant="caption" display="block" sx={{ m: 4, color: "#15143966" }}>
            © 2024 Designmodo. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
