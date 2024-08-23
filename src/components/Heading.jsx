import React from "react";
import { Typography } from "@mui/material";

const headingStyles = {
  heroHeading: {
    fontSize: {
      xs: "32px",
      sm: "40px",
      md: "52px",
      lg: "58px",
      xl: "58px",
    },
    fontWeight: 600,
    color: "primary.main",
    letterSpacing: "-1px",
    textAlign: "center",
    lineHeight: {
      xs: "42px",
      sm: "50px",
      md: "70px",
      lg: "70px",
      xl: "70px",
    },
    paddingX: { xs: "10%", sm: "20%" },
  },

  heroDesc: {
    marginY: {
      xs: "25px",
      sm: "32px",
      md: "40px",
      lg: "40px",
      xl: "45px",
    },
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    color: "text.main",
    paddingX: { xs: "5%", sm: "12%", lg: "15%" },
  },

  main: {
    fontSize: {
      xs: "22px",
      sm: "28px",
      md: "32px",
      lg: "32px",
      xl: "32px",
    },
    lineHeight: {
      xs: "22px",
      sm: "28px",
      md: "42px",
      lg: "42px",
      xl: "42px",
    },
    fontWeight: 700,
    color: "primary.main",
  },

  textHeading: {
    fontWeight: 600,
    color: "primary.main",
    fontSize: 18,
    lineHeight: "28px",
    textAlign: "left",
  },

  text: {
    fontSize: 16,
    color: "text.main",
    textAlign: "left",
  },

  badgeDesc: {
    fontSize: 16,
    color: "primary.main",
    textAlign: "left",
  },
};

const Heading = ({ variant, children, sx = {}, ...props }) => {
  const style = headingStyles[variant];

  return (
    <Typography sx={{ ...style, ...sx }} {...props}>
      {children}
    </Typography>
  );
};
export default Heading;
