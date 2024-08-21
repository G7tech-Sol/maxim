import React from "react";
import { Select, MenuItem, Box, Typography } from "@mui/material";

const Dropdown = ({ placeholder, value, options, onChange, sx }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      displayEmpty
      sx={{
        mt: 1,
        mb: 1,
        borderRadius: "50px",
        "& .MuiSelect-select": {
          color: value ? "primary.main" : "#BBB6D0",
          paddingTop: "8px",
          paddingBottom: "8px",
          borderRadius: "50px",
        },
        ...sx,
      }}
    >
      <MenuItem value="" disabled sx={{ display: "none" }}>
        {placeholder}
      </MenuItem>

      {options.map((option, index) => (
        <MenuItem
          key={index}
          value={option.value}
          sx={{
            color: "primary.main",
            "&:hover": {
              color: "secondary.main",
              backgroundColor: "#F5F5F5",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={option.image}
              alt={option.label}
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            <Typography>{option.label}</Typography>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
