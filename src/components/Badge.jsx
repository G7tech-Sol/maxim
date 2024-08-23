import React from "react";
import { Box, Chip } from "@mui/material";

const variantStyles = {
  notrequired1: {
    backgroundColor: "#15143966",
  },
  notrequired2: {
    backgroundColor: "#25DAC5",
  },
  notrequired3: {
    backgroundColor: "#482BE7",
  },
  required1: {
    backgroundColor: "#1E0E62",
  },
  required2: {
    backgroundColor: "#E93A7D",
  },
};

const Badge = ({ variant }) => {
  const label = variant.startsWith("required") ? "REQUIRED" : "NOT REQUIRED";
  const style = variantStyles[variant];

  return (
    <Box sx={{ mb: 3, mt: 1, textAlign: "left", color: "#25DAC5" }}>
      <Chip
        label={label}
        sx={{
          fontWeight: 700,
          color: "white",
          fontSize: "14px",
          width: 160,
          letterSpacing: "2px",
          ...style,
        }}
      />
    </Box>
  );
};

export default Badge;
