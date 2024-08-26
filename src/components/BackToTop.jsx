import React from "react";
import { Box } from "@mui/material";
import Button from "./Button";

const variantStyles = {
  noBordered: {
    fontWeight: "500",
    lineHeight: "22px",
    fontSize: "16px",
    backgroundColor: "transparent",
    textTransform: "none",
    color: "secondary.main",
    padding: "9px 19px",
    "&:hover": { backgroundColor: "transparent" },
    "&:active": { backgroundColor: "transparent" },
  },

  bordered: {
    fontWeight: "500",
    lineHeight: "22px",
    fontSize: "16px",
    borderRadius: "100px",
    border: "2px solid #EBEAED",
    backgroundColor: "transparent",
    textTransform: "none",
    color: "primary.main",
    padding: "9px 19px",
    "&:hover": { backgroundColor: "transparent" },
    "&:active": { backgroundColor: "transparent" },
  },
};

const BackToTop = ({ variant, sx }) => {
  const style = variantStyles[variant];

  return (
    <>
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
        <Button
          sx={{ ...style, ...sx }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ↑ Back to Top
        </Button>
      </Box>
    </>
  );
};

export default BackToTop;
