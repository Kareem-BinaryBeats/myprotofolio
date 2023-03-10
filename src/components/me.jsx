import { Typography, Grid, Avatar, Tooltip } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Box } from "@mui/system";
import myImage from "../assets/images/me.jpg";
import { BsGithub, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { MdEmail } from "react-icons/md";

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
          <IconButton aria-label={label} color={"primary"} href={link}>
            {icon}
          </IconButton>
        </Tooltip>
      </Grid>
    );
  };

  return (
    <Box my={3}>
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
          <Box>
            <Typography variant="h4">Kareem Ashraf</Typography>
          </Box>
          <Box>
            <Typography variant="h6" align="justify" my>
              Digital Infrastucture Consultant / Developer with +13 years of
              experience with roles ranging from operation support, large-scale
              network design and Network Development, Strong knowledge in
              network and datacenter designs, Strong knowledge in Network
              Automation / Programmability using Python, working with APIs and
              build backend using Django and frontend using React and native
              HTML / CSS / JS (build end to end Network Software) , well
              knowledge in IoT System Design and cloud integration with AWS ,
              certified Machine Learning / Deep learning Specification , past
              experience in Manufacturing (Lean Brown Belt Certified)
            </Typography>
          </Box>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Tooltip title="Copy My Email">
              <IconButton aria-label="Email" color={"primary"}>
                <MdEmail size="35px" onClick={() => copyToClipboard(email)} />
              </IconButton>
            </Tooltip>
          </Grid>
          <SocialIcon
            link="https://www.youtube.com/channel/UCZ7O2hhJx4O2Xk8wKJMs-jw"
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
