import Main from "./components/me";
import { Box, Container } from "@mui/system";
import Skills from "./components/skills";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ResponsiveAppBar from "./components/navbar";
import Soft from "./components/softskills";
import React, { useEffect } from "react";
import Exp from "./components/exp";
import Footer from "./components/footer";
import LinkedinEmbed from "./components/media"
export default function App() {
  

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#5f7883",
        extra: "rgba(206,255,253,0.5)",
      },
      secondary: {
        main: "#d500f9",
        extra: "rgba(0,0,0)",
      },

    },
    typography: {
      fontFamily: "Tilt Neon,Space Mono, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <ResponsiveAppBar />
      <Container>
        <Main />
      </Container>
      <Box sx={{ bgcolor: (theme) => theme.palette.secondary.extra }}>
        <Container>
          <LinkedinEmbed />
        </Container>
      </Box>
      <Box sx={{ bgcolor: (theme) => theme.palette.primary.extra }}>
        <Container>
          <Exp />
        </Container>
      </Box>
      <Box>
        <Container>
          <Skills />
        </Container>
      </Box>
      <Box sx={{ bgcolor: (theme) => theme.palette.primary.extra }}>
        <Container>
          <Soft />
        </Container>
        <Footer />
      </Box >
    </ThemeProvider>
  );
}
