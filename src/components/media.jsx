
import React from 'react';
import CardMedia from '@mui/material/CardMedia';

const LinkedinEmbed = ({ embedUrl }) => (
  <CardMedia
    component="iframe"
    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7090270676653096960?compact=1"
    frameBorder="0"
    allowFullScreen
    title="Kareem Ashraf on OB Innovation"
    sx={{ height: 300 }} // Adjust height as needed
  />
);

export default LinkedinEmbed;