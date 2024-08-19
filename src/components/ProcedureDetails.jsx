"use client";
import { Button, Box, Paper, Grid, Chip, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Heading from "./Heading";

const FormContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  paddingTop: theme.spacing(6),
  maxWidth: 787,
  margin: "0 auto",
}));

const ProcedureDetails = ({
  title,
  priorAuthorization,
  procedureService,
  procedureServiceDescription,
  insurer,
  dateOriginalEffective,
  revised,
}) => {
  const theme = useTheme();
  return (
    <>
      <FormContainer>
        <Paper elevation={0}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Heading variant="main" sx={{ textAlign: "left" }}>
                {title}
              </Heading>
            </Grid>

            <Grid item xs={12}>
              <Heading variant="textHeading">Prior Authorization</Heading>
              <Box sx={{ mb: 3, mt: 1, textAlign: "left", color: "#25DAC5" }}>
                <Chip
                  label={priorAuthorization}
                  sx={{
                    fontWeight: 700,
                    backgroundColor: priorAuthorization == "Non Required" ? "#25DAC5" : "#E93A7D",
                    textTransform: "uppercase",
                    color: "white",
                    fontSize: "14px",
                    letterSpacing: "2px",
                  }}
                />
              </Box>
            </Grid>

            <Grid container spacing={{ xs: 2, md: 10 }} sx={{ paddingLeft: theme.spacing(3) }}>
              <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
                <Heading variant="textHeading" sx={{ mt: 3 }}>
                  Procedure/Service
                </Heading>
                <Heading variant="text">{procedureService}</Heading>

                <Heading variant="textHeading" sx={{ mt: 3 }}>
                  Procedure/Service Description
                </Heading>
                <Heading variant="text">{procedureServiceDescription}</Heading>
              </Grid>

              <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
                <Heading variant="textHeading" sx={{ mt: 3 }}>
                  Insurer
                </Heading>
                <Heading variant="text">{insurer}</Heading>

                <Heading variant="textHeading" sx={{ mt: 3 }}>
                  Date Original Effective
                </Heading>
                <Heading variant="text">{dateOriginalEffective}</Heading>

                <Heading variant="textHeading" sx={{ mt: 3 }}>
                  Revised
                </Heading>
                <Heading variant="text">{revised}</Heading>
              </Grid>
            </Grid>

            {/* <Grid item xs={12} sx={{ mt: 4 }}>
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
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "500",
                    fontSize: "16px",
                    borderRadius: "100px",
                    px: 4,
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "auto",
                      lg: "auto",
                    },
                  }}
                >
                  Print
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "500",
                    fontSize: "16px",
                    borderRadius: "100px",
                    border: "2px solid",
                    px: 4,
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "auto",
                      lg: "auto",
                    },
                    "&:hover": {
                      border: "2px solid",
                    },
                  }}
                >
                  Save
                </Button>
              </Box>
            </Grid> */}
          </Grid>
        </Paper>
      </FormContainer>
    </>
  );
};

export default ProcedureDetails;
