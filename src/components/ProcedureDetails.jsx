"use client";
import { Box, Paper, Grid, Chip, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Heading from "./Heading";
import Badge from "./Badge";

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
              <Badge priorAuthorization={priorAuthorization} />
            </Grid>

            <Grid container spacing={{ xs: 1, md: 10 }} sx={{ paddingLeft: theme.spacing(3) }}>
              <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
                <Heading variant="textHeading" sx={{ mt: { xs: 3, lg: 5 } }}>
                  Procedure/Service
                </Heading>
                <Heading variant="text">{procedureService}</Heading>

                <Heading variant="textHeading" sx={{ mt: { xs: 3, lg: 5 } }}>
                  Procedure/Service Description
                </Heading>
                <Heading variant="text">{procedureServiceDescription}</Heading>
              </Grid>

              <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
                <Heading variant="textHeading" sx={{ mt: { xs: 3, lg: 5 } }}>
                  Insurer
                </Heading>
                <Heading variant="text">{insurer}</Heading>

                <Heading variant="textHeading" sx={{ mt: { xs: 3, lg: 5 } }}>
                  Date Original Effective
                </Heading>
                <Heading variant="text">{dateOriginalEffective}</Heading>

                <Heading variant="textHeading" sx={{ mt: { xs: 3, lg: 5 } }}>
                  Revised
                </Heading>
                <Heading variant="text">{revised}</Heading>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </FormContainer>
    </>
  );
};

export default ProcedureDetails;
