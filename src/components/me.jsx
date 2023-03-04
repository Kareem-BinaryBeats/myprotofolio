import {
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Grid,
  IconButton,
  Tooltip,
  useClipboard,
  Link
} from "@mui/material";

import myImage from "../assets/images/me.jpg";
import { BsGithub, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Social = ({ link, label, icon: Icon }) => {
  return (
    <Link href={link} isExternal>
      <IconButton
        aria-label={label}
        variant="ghost"
        size="lg"
        icon={Icon}
        _hover={{
          bg: "blue.500",
          color: useColorModeValue("white", "gray.700"),
        }}
        isRound
      />
    </Link>
  );
};

function Intro() {
  const { hasCopied, onCopy } = useClipboard("k.ashraf.salah@gmail.com");
  return (
    <Flex px={{ base: 5, md: 10 , lg:30 }}>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        templateRows={{
          base: "1fr",
          md: "repeat(3, 1fr)",
        }}
        spacing={5}
      >
        <GridItem colSpan={1} rowSpan={3}>
          <Image
            padding={{ base: 5, md: 10 }}
            alt={"feature image"}
            borderRadius="full"
            src={myImage}
            maxWidth="100%"
            objectFit={"cover"}
          />
        </GridItem>
        <GridItem
          colSpan={3}
          rowSpan={2}
          spacing={8}
          padding={{ base: 5, md: 10, lg: 30 }}
        >
          <Heading marginBottom={{ base: 3, md: 5, lg: 15 }}>
            Kareem Ashraf
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "md", md: "xl" }}
            marginBottom={{ base: 3, md: 5, lg: 15 }}
            textAlign={"justify"}
          >
            Digital Infrastucture Consultant / Developer with +13 years of
            experience with roles ranging from operation support, large-scale
            network design and Network Development, Strong knowledge in network
            and datacenter designs, Strong knowledge in Network
            Automation / Programmability using Python, working with APIs and build
            backend using Django and frontend using React and native HTML / CSS / JS
            (build end to end Network Software) , well knowledge in IoT System
            Design and cloud integration with AWS , certified Machine Learning /
            Deep learning Specification , past experience in Manufacturing (Lean
            Brown Belt Certified)
          </Text>
        </GridItem>

        <GridItem
          colSpan={{md:2 , lg:1}}
          rowSpan={1}
          spacing={8}
          paddingLeft={{ base: 5, md: 10, lg: 30 }}
        >
        <Stack
                  align="center"
                  justify="space-around"
                  direction={'row' }>
              <Tooltip
                label={hasCopied ? "Email Copied!" : "Copy Email"}
                closeOnClick={false}
                hasArrow
              >
                <IconButton
                  aria-label="email"
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<MdEmail />}
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                  onClick={onCopy}
                  isRound
                />
              </Tooltip>

              <Social
                link="https://www.youtube.com/channel/UCZ7O2hhJx4O2Xk8wKJMs-jw"
                label="Youtube"
                icon={<BsYoutube size="28px" />}
              />
              <Social
                link="https://twitter.com/Kareem_ASalah"
                label="twitter"
                icon={<BsTwitter size="28px" />}
              />
              <Social
                link="https://www.linkedin.com/in/kareem-ashraf-451172b6/"
                label="Linkedin"
                icon={<BsLinkedin size="28px" />}
              />
              <Social
                link="https://github.com/Kareem-DevNet"
                label="youtube"
                icon={<BsGithub size="28px" />}
              />
            </Stack>
        </GridItem>
        
      </Grid>
    </Flex>
  );
}

export default Intro;
