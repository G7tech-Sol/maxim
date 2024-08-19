"use client";
import { Typography, TextField, Button, Link, Box, Grid } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { styled } from "@mui/system";

const FormContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  textAlign: "left",
  maxWidth: 600,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const Form = () => {
  return (
    <FormContainer
      sx={{
        border: "2px solid #EBEAED",
        borderRadius: "10px",
        mt: 5,
        paddingX: {
          xs: 3,
          sm: 4,
          md: 6,
          lg: 7,
          xl: 8,
        },
        paddingY: {
          xs: 3,
          sm: 4,
          md: 6,
          lg: 7,
          xl: 8,
        },
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "primary.main", fontSize: 18 }}>
        Insurance Company
      </Typography>
      <Typography variant="subtitle1" sx={{ fontSize: 16, color: "#15143966" }}>
        Enter the insurance Company Name
      </Typography>
      <TextField
        fullWidth
        placeholder="Florida Blue"
        variant="outlined"
        sx={{
          mb: 1,
          mt: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
          },
          "& .MuiOutlinedInput-input": {
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 600, color: "primary.main", mt: 3, fontSize: 18 }}
      >
        Procedure Code
      </Typography>
      <Typography variant="subtitle1" sx={{ fontSize: 16, color: "#15143966" }}>
        You can type the procedure code your doctor will use to bill for the planned service or
        item. You can also type part of the code&apos;s description to search, for example type
        &quot;tonsil&quot; to find &quot;Removal of tonsils.&quot;
      </Typography>
      <TextField
        fullWidth
        placeholder="99241 – Office Consultation"
        variant="outlined"
        sx={{
          mb: 1,
          mt: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
          },
          "& .MuiOutlinedInput-input": {
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        }}
      />

      <Box sx={{ display: "inline-flex", alignItems: "center", paddingY: 3 }}>
        <AddCircleOutlineIcon sx={{ mr: 1, color: "secondary.main" }} />
        <Link href="#" sx={{ display: "block", color: "secondary.main" }}>
          Add another Procedure Code
        </Link>
      </Box>

      <Grid container justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          sx={{
            textTransform: "capitalize",
            fontWeight: "500",
            fontSize: "16px",
            borderRadius: "100px",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Check
        </Button>
      </Grid>
    </FormContainer>
  );
};

export default Form;
