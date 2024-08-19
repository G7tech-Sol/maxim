"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `'DM Sans', sans-serif`,
  },
  palette: {
    primary: {
      main: "#1E0E62",
    },
    secondary: {
      main: "#482BE7",
    },
  },
});

export default theme;
