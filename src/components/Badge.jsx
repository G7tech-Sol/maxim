import React from "react";
import { Box, Chip } from "@mui/material";

const Badge = ({ priorAuthorization }) => {
  return (
    <Box sx={{ mb: 3, mt: 1, textAlign: "left", color: "#25DAC5" }}>
      <Chip
        label={priorAuthorization}
        sx={{
          fontWeight: 700,
          backgroundColor: priorAuthorization == "Not Required" ? "#25DAC5" : "#E93A7D",
          textTransform: "uppercase",
          color: "white",
          fontSize: "14px",
          width: 160,
          letterSpacing: "2px",
        }}
      />
    </Box>
  );
};

export default Badge;
