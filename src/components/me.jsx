import { Typography, Grid, Avatar, Tooltip, Stack } from "@mui/material";
import { Box } from "@mui/system";
import myImage from "../assets/images/me.jpg";
import { BsGithub, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { Element } from "react-scroll";
import { grey } from "@mui/material/colors";
import { PiDiamondsFourFill } from "react-icons/pi";


function Main() {
  const [email, setEmail] = useState("k.ashraf.salah@gmail.com");

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {}
  };

  const SocialIcon = ({ icon, link, label }) => {
    return (
      <Grid item>
        <Tooltip title={label}>
          <IconButton aria-label={label} color={"primary"} href={link} target="_blank">
            {icon}
          </IconButton>
        </Tooltip>
      </Grid>
    );
  };

  return (
    <Element name="Home">
      <Box sx={{marginTop : 12 , marginBottom:4}}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          direction={{ xs: "column", md: "row", lg: "row" }}
        >
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              src={myImage}
              alt="Random image"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Box my={5}>
              <Typography
                variant="h3"
                color="error"
                sx={{ fontWeight: "bold" }}
              >
                {" "}
                HELLO !
              </Typography>
              <Typography
                variant="h3"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                {" "}
                I'am Kareem Ashraf{" "} 
              </Typography>
              <Typography
                variant="h6"
              >
              CCIE DC #68063
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" align="justify" color={grey[600]}>
              Datacenter Infrastructure Consultant , Network Automation and Orchestration Lead Consultant with +15 years of
                experience in Datacenter and LAN Networks Design, and Coding
              </Typography>
            </Box>
            <Stack direction='row'>
              <Tooltip title="Copy My Email">
                <IconButton aria-label="Email" color={"primary"}>
                  <MdEmail size="35px" onClick={() => copyToClipboard(email)} />
                </IconButton>
              </Tooltip>

              <SocialIcon
                link="https://www.youtube.com/channel/UC7eeHsZI9UK0JCcCredpxmg"
                label="visit my youtube channel"
                icon={<BsYoutube size="35px" />}
              />
              <SocialIcon
                link="https://twitter.com/Kareem_ASalah"
                label="follow my tweets"
                icon={<BsTwitter size="35px" />}
              />
              <SocialIcon
                link="https://www.linkedin.com/in/kareem-ashraf-451172b6/"
                label="connect to me "
                icon={<BsLinkedin size="35px" />}
              />
              <SocialIcon
                link="https://github.com/Kareem-DevNet"
                label="Check my Github"
                icon={<BsGithub size="35px" />}
              />
            </Stack>
          </Grid>
          <Grid container spacing={2} justifyContent="center"></Grid>
        </Grid>
      </Box>
    </Element>
  );
}

export default Main;
