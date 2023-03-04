import React, { Component } from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  StackDivider,
  Wrap,
  WrapItem,

} from "@chakra-ui/react";
import myImage from "../assets/images/me.jpg";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <Flex>
        <Wrap
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          margin="100px"
        >
          <WrapItem flex={3}>
            <Image borderRadius="full" src={myImage} alt="Kareem Ashraf" />
          </WrapItem>
          <WrapItem flex={7}>
            <Box marginRight={{ md: "4" }} margin={{ md: "5" }}>
              <Heading marginBottom="20px">Kareem Ashraf</Heading>
              <Text marginBottom="20px">
                Digital Infrastucture Consultant/Developer with +13 years of
                experience with roles ranging from operation support,
                large-scale network design and Network Development, Strong
                knowledge in network and datacenter designs, Strong knowledge in
                Network Automation/Programmability using Python, working with
                APIs and build backend using Django and frontend using React and
                native HTML/CSS/JS (build end to end Network Software) , well
                knowledge in IoT System Design and cloud integration with AWS ,
                certified Machine Learning / Deep learning Specification , past
                experience in Manufacturing (Lean Brown Belt Certified)
              </Text>
              <Wrap>
                <WrapItem alignItems="flex-end">
                  <EmailIcon />
                </WrapItem>
                <WrapItem>k.ashraf.salah@gmail.com</WrapItem>
              </Wrap>
              <Wrap>
                <WrapItem alignItems="flex-end">
                  <PhoneIcon />
                </WrapItem>
                <WrapItem alignItems="flex-end">+20 100 789 3050</WrapItem>
              </Wrap>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    );
  }
}

export default Portfolio;
