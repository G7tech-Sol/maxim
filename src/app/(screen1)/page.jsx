"use client";
import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Header from "@/components/Navbar";
import HeroText from "@/components/HeroText";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import ProcedureDetails from "@/components/ProcedureDetails";
import ButtonsGroup from "@/components/ButtonsGroup";
import BadgeGroup from "@/components/BadgeGroup";

export default function Home() {
  const [selectedProcedure, setSelectedProcedure] = useState([]);

  const handleCheck = (filteredData) => {
    if (filteredData.length > 0) {
      setSelectedProcedure(filteredData);
    }
  };
  return (
    <>
      <Header />
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          mt: {
            xs: "30px",
            sm: "40px",
            md: "70px",
            lg: "70px",
            xl: "80px",
          },
          mb: {
            xs: "30px",
            sm: "40px",
            md: "50px",
            lg: "70px",
            xl: "80px",
          },
        }}
      >
        <HeroText />
        <Form onCheck={handleCheck} />

        <Box sx={{ pt: 6 }}>
          {selectedProcedure.length > 1 &&
            selectedProcedure.map((procedure, index) => (
              <BadgeGroup
                key={index}
                priorAuthorization={procedure.priorAuthorization}
                title={procedure.title}
              />
            ))}
        </Box>

        {selectedProcedure.map((procedure, index) => (
          <ProcedureDetails
            key={index}
            title={procedure.title}
            priorAuthorization={procedure.priorAuthorization}
            procedureService={procedure.procedureService}
            procedureServiceDescription={procedure.procedureServiceDescription}
            insurer={procedure.insurer}
            dateOriginalEffective={procedure.dateOriginalEffective}
            revised={procedure.revised}
          />
        ))}

        {selectedProcedure.length > 0 && <ButtonsGroup />}
      </Container>
      <Footer />
    </>
  );
}
