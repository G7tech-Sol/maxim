"use client";
import React, { useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Header from "@/components/Navbar";
import HeroText from "@/components/HeroText";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import ProcedureDetails from "@/components/ProcedureDetails";
import ButtonsGroup from "@/components/ButtonsGroup";

const MainContent = styled(Container)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(9),
  marginBottom: theme.spacing(8),
}));

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
      <MainContent maxWidth="md">
        <HeroText />
        <Form onCheck={handleCheck} />

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
      </MainContent>
      <Footer />
    </>
  );
}
