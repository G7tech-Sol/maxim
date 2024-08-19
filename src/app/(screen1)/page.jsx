"use client";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Header from "@/components/Navbar";
import HeroText from "@/components/HeroText";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

const MainContent = styled(Container)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(8),
}));

export default function Home() {
  return (
    <>
      <Header />
      <MainContent maxWidth="md">
        <HeroText />
        <Form />
      </MainContent>

      <Footer />
    </>
  );
}
