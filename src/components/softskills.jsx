import { Element } from "react-scroll";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CheckIcon from "@mui/icons-material/Check";
import { Card, CardMedia, CardContent, Chip } from "@mui/material";
import CCNP from "../assets/images/ccnp-enterprise.png";
import CSDWAN from "../assets/images/Cisco_Specialist_600.png";
import ML from "../assets/images/machine-banner-e1580283237602.png";
import DL from "../assets/images/dp.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Cisco from "../assets/images/spec.jpg"
import CiscoDC from "../assets/images/cciedc.jpg"
import Terra from "../assets/images/terra.jpg"
import Dev from "../assets/images/devpro.jpg"
import CCNPINT from "../assets/images/ccnpint.jpg"

function Soft() {
  const Skillcab = ({ label }) => {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: (theme) => theme.palette.primary.dark }}>
            <CheckIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={label} />
      </ListItem>
    );
  };

  const Certcab = ({ img, alter, label, link }) => {
    return (
      <Card sx={{ display: "flex", m: 1 }}>
        <Box p={1} sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia
            component="img"
            sx={{ objectFit: "cover", width: 120 }}
            image={img}
            alt={alter}
          />
          <CardContent>
            <Typography component="div" variant="subtitle1">
              {label}
            </Typography>
            <Chip
              label="Show credential"
              icon={<OpenInNewIcon />}
              variant="outlined"
              href={link}
              component="a"
              clickable
              target="_blank"
              rel="noopener"

            />
          </CardContent>
        </Box>
      </Card>
    );
  };
  return (
    <Element name="Certifications">
      <Box>
            <Typography py={2} variant="h3" align="center">
              Certifications
            </Typography>
        <Grid container direction={{ xs: "column", md: "row" }}>

          {/* <Grid item xs={6}>
            <Typography py={2} variant="h3" align="center">
              Soft Skills
            </Typography>
            <Box>
              <Grid container direction={{ xs: "column", md: "row" }}>
                <Grid item xs={6}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                    }}
                  >
                    <Skillcab label="Flexibility" />
                    <Skillcab label="Team Player" />
                    <Skillcab label="Positive Mental Attitude" />
                    <Skillcab label="Strong Work Ethic" />
                    <Skillcab label="Public Speaking" />
                  </List>
                </Grid>

                <Grid item xs={6}>
                  <List
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Skillcab label="Assertiveness" />
                    <Skillcab label="Creative Thinking" />
                    <Skillcab label="Resource Management" />
                    <Skillcab label="Leadership" />
                    <Skillcab label="Rapid Learning" />
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Grid> */}
          <Grid item xs={6}>
            <Certcab
              img={CiscoDC}
              alter="CCIE DC"
              label="Cisco Certified Internetwork Expert Data Center (CCIE Data Center)"
              link="https://www.credly.com/badges/f0caf175-8b37-461c-aaee-e855e4300591/linked_in_profile"
            />
            <Certcab
              img={CCNPINT}
              alter="CCNP Enterprise Infrastucture"
              label="Cisco Certified Network Professional Enterprise (CCNP
                Enterprise)"
              link="https://www.credly.com/badges/1294815b-7992-4fb3-a6f3-74418940d8ad/linked_in_profile"
            />
            <Certcab
              img={Dev}
              alter="DevCore"
              label="Cisco Certified DevNet Specialist - Core"
              link="https://www.credly.com/badges/56d2e79b-faf0-42b9-96d8-e1033ea14e6b/linked_in_profile"/>
            <Certcab
              img={Cisco}
              alter="Enterprise SD-WAN Implementation"
              label="Cisco Certified Specialist - Enterprise SD-WAN Implementation"
              link="https://www.credly.com/badges/ff456752-7c5d-4edb-907b-9a9ba00a69dc/linked_in_profile"
            />

          </Grid>
          <Grid item xs={6}>

            <Certcab
              img={Terra}
              alter="HCTA0"
              label="HashiCorp Certified: Terraform Associate (003)"
              link="https://www.credly.com/badges/7e4bad79-93d8-41dd-bb9c-26a2a6dd35e0/linked_in_profile"/>
            <Certcab
              img={ML}
              alter="Machine Learning"
              label="Machine Learning"
              link="https://www.coursera.org/account/accomplishments/certificate/NF38YZSL8PNN"
            />
            <Certcab
              img={DL}
              alter="Deep Learning Specialization"
              label="Deep Learning Specialization"
              link="https://www.coursera.org/account/accomplishments/specialization/certificate/MYTDYW68TW5G"
            />
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
}

export default Soft;
