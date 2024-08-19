import { Box, TextField, IconButton, Typography } from "@mui/material";
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
    <Box sx={{ position: "relative", mb: 1, mt: 1, pr: totalFields > 1 ? 5 : 0, width: "100%" }}>
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
          },
          "& .MuiOutlinedInput-input": {
            fontWeight: "500",
            color: "primary.main",
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingRight: "42px",
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
