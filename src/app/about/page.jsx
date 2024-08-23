"use client";
import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Badge from "@/components/Badge";
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import InputText from "@/components/InputText";
import InputAutofill from "@/components/InputAutofill";
import Buttons from "@/components/Button";

const Page = () => {
  const options = ["Florida Blue", "First Family Insurance"];
  const [company, setCompany] = useState("");

  const handleChange = (event, newValue) => {
    setCompany(newValue);
  };

  return (
    <>
      <Header />
      <Box sx={{ paddingX: "15%", paddingY: "50px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ mb: 6, textAlign: "center", fontWeight: "600", color: "primary.main" }}
        >
          Custom Components Showcase
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: "500", color: "primary.main" }} gutterBottom>
            Buttons
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Buttons variant="greyButton">Grey Outlined Button</Buttons>
            </Grid>
            <Grid item>
              <Buttons variant="coloredButton">Colored Outlined Button</Buttons>
            </Grid>
            <Grid item>
              <Buttons variant="filledButton">Filled Button</Buttons>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom>
            Badges
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Badge variant="notrequired1" />
            </Grid>
            <Grid item>
              <Badge variant="notrequired2" />
            </Grid>
            <Grid item>
              <Badge variant="notrequired3" />
            </Grid>
            <Grid item>
              <Badge variant="required1" />
            </Grid>
            <Grid item>
              <Badge variant="required2" />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom>
            Text Field
          </Typography>
          <InputText placeholder="Standard Text Field" />
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom>
            Suggested Text Field
          </Typography>
          <InputAutofill
            placeholder="Search Company"
            value={company}
            onChange={handleChange}
            options={options}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Page;
