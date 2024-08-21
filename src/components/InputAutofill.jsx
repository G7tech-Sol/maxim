import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const InputAutofill = ({ placeholder, name, value, onChange, options, sx }) => {
  const [inputValue, setInputValue] = useState(value);
  const [open, setOpen] = useState(false);

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
    onChange(event, newValue);
    setOpen(newValue !== "");
  };

  const isObjectOption = (option) =>
    typeof option === "object" && option !== null && "label" in option;

  return (
    <Autocomplete
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: 0,
          paddingLeft: 1,
        },
      }}
      open={open}
      onClose={() => setOpen(false)}
      freeSolo
      options={options}
      getOptionLabel={(option) => (isObjectOption(option) ? option.label : option)}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant="outlined"
          placeholder={placeholder}
          name={name}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="/assets/images/search-icon.png"
                  alt="Search Icon"
                  style={{ width: 24, height: 24, borderRadius: "50%" }}
                />
              </InputAdornment>
            ),
          }}
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
      )}
      renderOption={(props, option) => (
        <MenuItem
          {...props}
          sx={{
            color: "primary.main",
            "&:hover": {
              color: "secondary.main",
              backgroundColor: "#F5F5F5",
            },
          }}
        >
          {isObjectOption(option) ? (
            <>
              <ListItemIcon>
                <img
                  src={option.image}
                  alt={option.label}
                  style={{ width: 24, height: 24, borderRadius: "50%" }}
                />
              </ListItemIcon>
              <ListItemText primary={option.label} />
            </>
          ) : (
            <ListItemText primary={option} />
          )}
        </MenuItem>
      )}
    />
  );
};

export default InputAutofill;
