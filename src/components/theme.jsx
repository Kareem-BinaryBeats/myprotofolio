import React, { useState } from "react";
import { createTheme } from "@mui/system";

const [darkMode, setDarkMode] = useState(false);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f96100",
    },
    secondary: {
      main: "#0c0c0c",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f96100",
    },
    secondary: {
      main: "#0c0c0c",
    },
  },
});
