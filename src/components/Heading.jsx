import React from "react";
import { Typography } from "@mui/material";

const headingStyles = {
  heroHeading: {
    fontSize: {
      xs: "32px",
      sm: "40px",
      md: "52px",
      lg: "58px",
      xl: "60px",
    },
    fontWeight: 600,
    color: "primary.main",
    textAlign: "center",
    lineHeight: {
      xs: "42px",
      sm: "50px",
      md: "70px",
      lg: "72px",
      xl: "80px",
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
    textAlign: "center",
    paddingX: { xs: "5%", sm: "12%", lg: "15%" },
  },

  main: {
    fontSize: {
      xs: "22px",
      sm: "28px",
      md: "32px",
      lg: "32px",
      xl: "38px",
    },
    fontWeight: 600,
    color: "primary.main",
  },

  textHeading: {
    fontWeight: 600,
    color: "primary.main",
    fontSize: 18,
    textAlign: "left",
  },

  text: {
    fontSize: 16,
    color: "text.primary",
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
