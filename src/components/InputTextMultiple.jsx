import { Box, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const InputTextMultiple = ({
  index,
  handleRemoveField,
  placeholder,
  name,
  value,
  onChange,
  totalFields,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        mb: 1,
        mt: 1,
        pr: totalFields > 1 ? 5 : 0,
        width: "100%",
      }}
    >
      <TextField
        fullWidth
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
        sx={{
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
        }}
      />
      {totalFields > 1 && (
        <IconButton
          onClick={() => handleRemoveField(index)}
          sx={{
            position: "absolute",
            top: "50%",
            right: "1px",
            transform: "translateY(-50%)",
            border: "1px solid #EBEAED",
            zIndex: 1,
          }}
        >
          <CloseIcon sx={{ fontSize: "12px" }} />
        </IconButton>
      )}
    </Box>
  );
};

export default InputTextMultiple;
