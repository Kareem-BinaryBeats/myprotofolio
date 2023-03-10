import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import {BsSun ,BsMoonFill } from "react-icons/bs"
import { blueGrey } from "@mui/material/colors";




const darkTheme = createTheme({
  palette: {
    mode: "dark",

    
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function MyAppBar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider  theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBar position="static" px={4}>
        <Toolbar>
          <Typography variant="h6">My App</Typography>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)} >
                {darkMode ? <BsSun /> : <BsMoonFill />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default MyAppBar;
