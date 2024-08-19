"use client";
import { Typography, Button, Box, Paper, Grid, Divider, Chip } from "@mui/material";
import { styled } from "@mui/system";

const FormContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  paddingTop: theme.spacing(6),
  maxWidth: 600,
  margin: "0 auto",
}));

const ProcedureDetails = () => {
  return (
    <FormContainer>
      <Paper elevation={0}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "600", fontSize: "25px" }}
            >
              70544 – Magnetic resonance angiography, head; <br /> without contrast material(s)
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "600", mr: 2 }}
            >
              Procedure/Service
            </Typography>
            <Box sx={{ mb: 3, textAlign: "left", mr: 2 }}>
              <Chip label="NOT REQUIRED" color="success" sx={{ fontWeight: "bold" }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "600" }}
            >
              Procedure/Service
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "left" }}>
              Magnetic Resonance Angiography (MRA) Brain (Head)
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "600" }}
            >
              Insurer
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "left" }}>
              Florida Blue
            </Typography>
          </Grid>

          {/* <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid> */}

          <Grid item xs={12} md={8}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "600", mr: 3 }}
            >
              Procedure/Service Description
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ textAlign: "left", mr: 2 }}>
              Magnetic resonance angiography (MRA) is a noninvasive imaging technology used for the
              evaluation and imaging of intracranial vascular disease. Magnetic resonance
              angiography (MRA) or magnetic resonance venography (MRV) may be used as a first-line
              investigation of intracranial vascular disease. It is particularly useful in patients
              who are sensitive to the contrast agent (gadolinium) that may be used with MRA/MRV to
              enable visualization of a body system or body structure and may be used in individuals
              who have a history of contrast allergy and who are at high risk of kidney failure.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ pl: 2 }}>
            <div>
              <Typography variant="subtitle1" gutterBottom sx={{ textAlign: "left", mt: 2 }}>
                Date Original Effective
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "left", mb: 2 }}>
                11/15/13
              </Typography>
            </div>

            <div sx={{ mt: 4 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ textAlign: "left", mt: 4 }}>
                Revised
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "left", mb: 2 }}>
                09/30/23
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
              <Button variant="contained" color="primary" sx={{ borderRadius: 25, px: 4 }}>
                Print
              </Button>
              <Button variant="outlined" color="primary" sx={{ borderRadius: 25, px: 4 }}>
                Save
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
                ↑ Back to Top
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </FormContainer>
  );
};

export default ProcedureDetails;
