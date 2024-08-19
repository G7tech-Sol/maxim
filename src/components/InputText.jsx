import React from "react";
import { TextField } from "@mui/material";

const InputText = ({ placeholder, name, value, onChange, sx }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      sx={{
        mb: 1,
        mt: 1,
        "& .MuiOutlinedInput-root": {
          borderRadius: "50px",
        },
        "& .MuiOutlinedInput-input": {
          fontWeight: "500",
          color: "primary.main",
          paddingTop: "8px",
          paddingBottom: "8px",
        },
        ...sx,
      }}
    />
  );
};

export default InputText;
