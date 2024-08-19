"use client";
import React from "react";
import Heading from "./Heading";

const Herotext = () => {
  return (
    <div>
      <Heading variant="heroHeading">Prior Authorization Lookup Tool</Heading>
      <Heading variant="heroDesc">
        Use this form to determine if a service or item requires prior authorization from the health
        plan before you receive care.
      </Heading>
      <Heading variant="main" sx={{ paddingX: { xs: "8%", sm: "15%" } }}>
        Let&apos;s check and see if a prior authorization is required.
      </Heading>
    </div>
  );
};

export default Herotext;
