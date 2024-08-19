import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import Buttons from "./Button";

const FormContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  paddingTop: theme.spacing(6),
  maxWidth: 787,
  margin: "0 auto",
}));

const ButtonsGroup = () => {
  return (
    <FormContainer>
      <Grid item xs={12} sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: 2,
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
            alignItems: {
              xs: "stretch",
              sm: "stretch",
              md: "flex-start",
            },
          }}
        >
          <Buttons variant="print">Print</Buttons>
          <Buttons variant="save">Save</Buttons>
        </Box>
      </Grid>
    </FormContainer>
  );
};

export default ButtonsGroup;
