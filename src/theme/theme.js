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
    text: {
      main: "#15143966",
    },
    border: {
      main: "#482BE7",
    },
  },

  // components: {
  //   MuiTextField: {
  //     styleOverrides: {
  //       root: {
  //         "& .MuiOutlinedInput-root": {
  //           "& fieldset": {
  //             border: "2px solid #ebeaed",
  //           },
  //           "&:hover fieldset": {
  //             border: "2px solid #482BE7",
  //           },
  //           "&.Mui-focused fieldset": {
  //             border: "2px solid #482BE7",
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
});

export default theme;
