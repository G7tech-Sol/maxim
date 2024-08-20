"use client";
import { Typography, Link, Box, Grid } from "@mui/material";

const Footer = () => {
  const navItems = ["Tour", "Prices", "About", "F.A.Q.", "Support"];
  return (
    <>
      <Box sx={{ paddingX: "6% !important" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "right",
                lg: "right",
              },
            }}
          >
            <Typography
              variant="body2"
              color="secondary"
              sx={{ cursor: "pointer", fontWeight: 700, mt: 5 }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              ↑ Back to Top
            </Typography>
          </Box>
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
                mx: 1,
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
