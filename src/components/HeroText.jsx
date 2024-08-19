"use client";
import React from "react";
import { Typography, useTheme } from "@mui/material";

const Herotext = () => {
  const theme = useTheme();
  return (
    <div>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontSize: {
            xs: "32px",
            sm: "38px",
            md: "44px",
            lg: "52px",
            xl: "60px",
          },
          fontWeight: 600,
          color: theme.palette.primary.main,
          textAlign: "center",
          paddingX: { xs: "10%", sm: "20%" },
        }}
      >
        Prior Authorization Lookup Tool
      </Typography>
      <Typography
        variant="body1"
        sx={{ my: 3, textAlign: "center", paddingX: { xs: "5%", sm: "15%" } }}
      >
        Use this form to determine if a service or item requires prior authorization from the health
        plan before you receive care.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: {
            xs: "22px",
            sm: "28px",
            md: "32px",
            lg: "38px",
            xl: "44px",
          },
          fontWeight: 600,
          color: theme.palette.primary.main,
          paddingX: { xs: "8%", sm: "15%" },
        }}
      >
        Let&apos;s check and see if a prior authorization is required.
      </Typography>
    </div>
  );
};

export default Herotext;
