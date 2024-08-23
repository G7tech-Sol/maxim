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
          "& fieldset": {
            border: "2px solid #EBEAED",
          },
          "&:hover fieldset": {
            border: "2px solid #482BE7",
          },
          "&.Mui-focused fieldset": {
            border: "2px solid #482BE7",
          },
        },
        "& .MuiOutlinedInput-input": {
          color: "primary.main",
          fontWeight: "500",
          paddingY: "13px",
          paddingLeft: "16px",
          paddingRight: "42px",
          "&::placeholder": {
            color: "#15143966",
          },
        },
        "&:hover .MuiOutlinedInput-input::placeholder": {
          color: "#15143966",
        },
        "&.Mui-focused .MuiOutlinedInput-input::placeholder": {
          color: "primary.main",
        },
        ...sx,
      }}
      // sx={{
      //   mb: 1,
      //   mt: 1,
      //   "& .MuiOutlinedInput-root": {
      //     borderRadius: "50px",
      //   },
      //   "& .MuiOutlinedInput-input": {
      //     fontWeight: "500",
      //     color: "primary.main",
      //     paddingTop: "8px",
      //     paddingBottom: "8px",
      //   },
      //   ...sx,
      // }}
    />
  );
};

export default InputText;
