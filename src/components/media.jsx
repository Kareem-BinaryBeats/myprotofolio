
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Element } from "react-scroll";
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';


export default function LinkedinEmbed() {
  return(
    <Element name="Me Talking">
        <Box>
              <Typography py={2} variant="h4" align="left" color={"#FFFFFF"}>
                Check Me Talking about the Automation Future
              </Typography>
              <CardMedia
                component="iframe"
                display="block"
                position="relative"
                style ={{border:null}}
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7090270676653096960?compact=1"
                height="500"
                width="100%"
                allowFullScreen
                title="Kareem Ashraf on OB Innovation"
              />
            
        </Box>
    </Element>
    )
  }
