import Button from "@mui/material/Button";
import Main from "./components/me";
import { blueGrey } from "@mui/material/colors";
import { Box, Container } from "@mui/system";
import Skills from "./components/skills";

import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveAppBar from "./components/navbar";

export default function App() {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#f96100",
        lightcus: '#ffd5bd',
      },
      secondary: {
        main: "#0c0c0c",
      },
    },
  });
  return (
    <ThemeProvider theme={lightTheme}>
     <ResponsiveAppBar />
      <Container>
        <Main />
      </Container>
      <Box sx={{ bgcolor: (theme) => theme.palette.primary.lightcus }}>
        <Container>
          <Skills />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
