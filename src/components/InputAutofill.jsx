import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  MenuItem,
  Popper,
  styled,
  Box,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

const StyledPopper = styled(Popper)({
  zIndex: 1300,
  "& .MuiAutocomplete-paper": {
    boxShadow: "none",
    margin: 0,
    borderRadius: "0 0 25px 25px",
    border: "2px solid #482BE7",
    borderTop: "none",
  },
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& .MuiAutocomplete-endAdornment": {
      display: "none", // Hide the default dropdown arrow
    },
  },
});

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
    <Box
      sx={{
        display: "inline-block",
        width: "100%",
        borderRadius: open ? "25px 25px 0 0" : "25px",
      }}
    >
      <Autocomplete
        sx={{
          "& .MuiOutlinedInput-root": {
            padding: 0,
            paddingLeft: 1,
            paddingY: "6px",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        onInputChange={handleInputChange}
        options={options}
        getOptionLabel={(option) => (isObjectOption(option) ? option.label : option)}
        inputValue={inputValue}
        PopperComponent={(props) => <StyledPopper {...props} />}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            fullWidth
            variant="outlined"
            placeholder={placeholder}
            name={name}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start" sx={{ paddingLeft: "12px" }}>
                  <img
                    src="/assets/images/search-icon.png"
                    alt="Search Icon"
                    style={{ width: 24, height: 24, marginRight: "-6px" }}
                  />
                </InputAdornment>
              ),
              sx: {
                borderRadius: open ? "25px 25px 0 0" : "25px",
                paddingLeft: "14px",
                fontWeight: 500,
                color: inputValue ? "primary.main" : "#15143966",
                "&::placeholder": {
                  color: inputValue ? "primary.main" : "#15143966",
                },
                "&:hover": {
                  color: "primary.main",
                  "&::placeholder": {
                    color: " #15143966",
                  },
                },
                "&.Mui-focused": {
                  color: "primary.main",
                  "&::placeholder": {
                    color: "primary.main",
                  },
                },
              },
            }}
            sx={{
              mb: 1,
              mt: 1,
              "& .MuiOutlinedInput-root": {
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
              ...sx,
            }}
          />
        )}
        renderOption={(props, option) => (
          <MenuItem
            {...props}
            sx={{
              color: "primary.main",
              fontWeight: 500,
              "&:hover": {
                color: "secondary.main",
                backgroundColor: "#F5F5F5",
              },
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/assets/images/search-icon.png"
              alt="Search Icon"
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            {isObjectOption(option) ? option.label : option}
          </MenuItem>
        )}
      />
    </Box>
  );
};

export default InputAutofill;
