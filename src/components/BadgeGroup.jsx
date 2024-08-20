import React from "react";
import { Box, Chip } from "@mui/material";
import styled from "@emotion/styled";
import Heading from "./Heading";

const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 787,
  margin: "0 auto",
}));

const BadgeGroup = ({ priorAuthorization, title }) => {
  return (
    <FormContainer>
      <Box
        sx={{
          mt: { xs: 5, md: 3, lg: 3 },
          mb: { xs: 5, md: 3, lg: 3 },
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
          gap: { xs: 2, md: 4, lg: 4 },
        }}
      >
        <Chip
          label={priorAuthorization}
          sx={{
            fontWeight: 700,
            backgroundColor: priorAuthorization === "Not Required" ? "#25DAC5" : "#E93A7D",
            textTransform: "uppercase",
            width: 160,
            color: "white",
            fontSize: "14px",
            letterSpacing: "2px",
          }}
        />
        <Heading variant="badgeDesc">{title}</Heading>
      </Box>
    </FormContainer>
  );
};

export default BadgeGroup;
