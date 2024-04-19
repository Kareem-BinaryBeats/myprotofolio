import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          {/* <Box sx={{ flexGrow: 0 }}>
              <IconButton
                color="inherit"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <BsSun /> : <BsMoonFill />}
              </IconButton>
            </Box> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <CopyrightIcon />
            <Typography variant="body2" sx={{ mr: 1 }}>
              2024 All Rights Reserved | Kareem Ashraf
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;
