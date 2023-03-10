import * as React from "react";
import Button from "@mui/material/Button";
import Main from "./components/me";
import MyAppBar from "./components/navbar";
import { blueGrey } from "@mui/material/colors";
import { useState } from "react";
import { Box, Container } from "@mui/system";
import Skills from "./components/skills";

export default function App() {
  return (
    <>
      <MyAppBar />
      <Container>
        <Main />
      </Container>
      <Box sx={{ backgroundColor: blueGrey[100] }}>
      <Container>
      <Skills />
      </Container>
      </Box>
    </>
  );
}
