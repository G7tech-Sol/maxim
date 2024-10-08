import React from "react";
import { Button } from "@mui/material";

const buttonStyles = {
  check: {
    borderRadius: 25,
    backgroundColor: "secondary.main",
    textTransform: "capitalize",
    fontWeight: "500",
    color: "white",
    fontSize: "16px",
    px: 4,
    width: { xs: "100%", sm: "auto" },
    "&:hover": { backgroundColor: "secondary.main" },
  },

  greyButton: {
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: "16px",
    border: "2px solid #EBEAED",
    borderRadius: "100px",
    backgroundColor: "transparent",
    px: 2,
    color: "primary.main",
    "&:hover": {
      border: "2px solid #EBEAED",
      backgroundColor: "#F5F5F5",
    },
  },

  coloredButton: {
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: "16px",
    border: "2px solid #482BE7",
    borderRadius: "100px",
    backgroundColor: "transparent",
    px: 2,
    color: "#482BE7",
    "&:hover": {
      border: "2px solid #4D25BD",
      color: "#4D25BD",
      backgroundColor: "transparent",
    },
  },

  filledButton: {
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: "16px",
    border: "2px solid #482BE7",
    borderRadius: "100px",
    backgroundColor: "#482BE7",
    px: 2,
    color: "white",
    "&:hover": {
      border: "2px solid #4D25BD",
      backgroundColor: "#4D25BD",
    },
  },

  login: {
    ml: 2,
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: "16px",
    borderRadius: "100px",
    backgroundColor: "transparent",
    color: "primary.main",
    "&:hover": { backgroundColor: "transparent" },
  },

  print: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: "16px",
    borderRadius: "100px",
    backgroundColor: "secondary.main",
    border: "2px solid",
    px: 4,
    color: "white",
    width: {
      xs: "100%",
      sm: "100%",
      md: "auto",
      lg: "auto",
    },
    "&:hover": {
      backgroundColor: "secondary.main",
    },
  },
  save: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: "16px",
    borderRadius: "100px",
    border: "2px solid",
    px: 4,
    color: "secondary.main",
    fontSize: "16px",
    width: {
      xs: "100%",
      sm: "100%",
      md: "auto",
      lg: "auto",
    },
    "&:hover": {
      border: "2px solid",
    },
  },
};
const Buttons = ({ variant, children, sx = {}, ...props }) => {
  const style = buttonStyles[variant];
  return (
    <Button sx={{ ...style, ...sx }} {...props}>
      {children}
    </Button>
  );
};
export default Buttons;
