import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import { Typography, Divider, useMediaQuery } from "@mui/material";
import OBS from "../assets/images/obs.png";
import ET from "../assets/images/ET_Logo.png";
import bahgat from "../assets/images/bahgat.png";
import { grey } from "@mui/material/colors";
import { Element } from "react-scroll";


export default function Exp() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <Element name="Experiance">
      <Typography py={2} align="center" variant="h2" gutterBottom={true}>
        My Working Experience
      </Typography>
      <TabContext value={value}>
        <TabList
          orientation={isSmallScreen ? 'vertical' : 'horizontal'}
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
          
          <Tab
            icon={<img src={OBS} width="100%" alt="OBS" objectfit="cover" />}
            value={1}
          />
          <Tab
            icon={<img src={ET} width="100%" alt="OBS" objectfit="cover" />}
            iconPosition="start"
            value={2}
          />
          <Tab
            icon={<img src={bahgat} width="100%" alt="OBS" objectfit="cover" />}
            iconPosition="end"
            value={3}
          />
        </TabList>
        <TabPanel value={1} index={0}>
          <Typography variant="h4">
          Datacenter Infrastructure Consultant , Network Automation and Orchestration Lead Consultant          </Typography>
          <Typography
            px={5}
            variant="subtitle2"
            color={grey[500]}
            gutterBottom={true}
          >
            March 2019 - Present
          </Typography>
          <Typography variant="body1">
            <li>
              Technical Consultancy Role to provide Network Infrastructure
              Solutions in critical/complex environment. supporting transition
              and transformation project for Major/Large Sites
            </li>
            <li>Support Digital Infrastructure Transformation and automation initiatives</li>
            <li>Support IoT Projects ( Hardware , Cloud/ML integration)</li>
          </Typography>
          {/* <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
          <Typography variant="h5">Milestones</Typography>
          <Typography variant="body1">
            <li>Network Transformation Project ( SME Network Consultant )</li>
            <li>
              Large production site 150 Buildings - 1000+ network devices - 10
              Core Switches connected via MPLS network
            </li>
            <li>
              Regional Hub sites - Office Network - Nexus Datacenter - CUCM
              datacenter
            </li>
            <li>
              IOT GreenGrass Edge deployment and data communication with AWS IOT
              Core connected to AWS services Ex. Kinesis firehose ,Dynamo DB
            </li>
            <li>
              integration of ekkono ML with AWS greengrass ( collect data and do
              incremental training to produce model used for Maintenance
              predication )
            </li>
            <li>
              LLD automation - full automated data extraction and analysis for
              existing infrastructure
            </li>
            <li>Automated Network Discovery</li>
            <li>Building IPAM system Integrated with internal tools</li>
            <li>Prime Infrastructure software for AP data collection</li>
            <li>
              Viptela SDWAN fully automated software to collect Specific data
              and produce reporting
            </li>
            <li>Total + 2500 Man days saved from Automaton Projects</li>
          </Typography> */}
        </TabPanel>
        <TabPanel value={2} index={1}>
          <Typography variant="h4">
            Senior Engineer - Enterprice Opertaions Backoffice{" "}
          </Typography>
          <Typography
            px={5}
            variant="subtitle2"
            color={grey[500]}
            gutterBottom={true}
          >
            Jan 2015 - Feb 2019
          </Typography>
          <li>
            Senior Operations Back Office Engineer Provide Second Line Support
            for all Customer Complains about different Services (Internet,L2VPN,
            L3VPN, and International VPN
          </li>
        </TabPanel>
        <TabPanel value={3} index={2}>
          <Typography variant="h4">
            Web Development / Network Engineer{" "}
          </Typography>
          <Typography
            px={5}
            variant="subtitle2"
            color={grey[500]}
            gutterBottom={true}
          >
            Oct 2010 - Dec 2014
          </Typography>
          <li>
            Manage IT Data Network ,Fiber Infrastructure and Handle new Network
            projects
          </li>
          <li>Build New Websites as per company demand </li>
        </TabPanel>
      </TabContext>
    </Element>
  );
}
