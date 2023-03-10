import * as React from "react";
import Timeline, { timelineClasses } from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";
import { Chip, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { blueGrey } from "@mui/material/colors";

import {
  TbApi,
  TbSwitch2,
  TbRouter,
  TbSwitch,
  TbDna,
  TbSql,
  TbCloudDataConnection,
} from "react-icons/tb";
import {
  FaCode,
  FaHtml5,
  FaCss3,
  FaDev,
  FaPython,
  FaReact,
  FaServer,
  FaAws,
} from "react-icons/fa";
import {
  SiAzuredevops,
  SiFastapi,
  SiDjango,
  SiJavascript,
  SiDocker,
  SiJira,
} from "react-icons/si";
import { TiFlowSwitch } from "react-icons/ti";
import { BsGit, BsCodeSlash } from "react-icons/bs";
import { MdOutlineSensors } from "react-icons/md";

export default function Skills() {
  const Timecomp = ({ Timedot, TimeContent }) => {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          {Timedot}
          <TimelineConnector />
        </TimelineSeparator>
        {TimeContent}
      </TimelineItem>
    );
  };
  return (
    <>
      <Typography py={5} variant="h2" align="center">
        Skills
      </Typography>

      <Grid container direction={{ xs: "column", md: "row" }}>
        <Grid item xs={4}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <Timecomp
              Timedot={
                <TimelineDot
                  sx={{ bgcolor: (theme) => theme.palette.info.dark }}
                >
                  <TbCloudDataConnection size={23} />
                </TimelineDot>
              }
              TimeContent={
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box>
                    <Typography variant="h6" component="span">
                      SDWAN Design
                    </Typography>
                  </Box>
                </TimelineContent>
              }
            />
            <Timecomp
              Timedot={
                <TimelineDot>
                  <FaServer size={23} />
                </TimelineDot>
              }
              TimeContent={
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box>
                    <Typography variant="h6" component="span">
                      Data Center Design
                    </Typography>
                  </Box>
                </TimelineContent>
              }
            />
            <Timecomp
              Timedot={
                <TimelineDot color="secondary">
                  <TiFlowSwitch size={23} />
                </TimelineDot>
              }
              TimeContent={
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box>
                    <Typography variant="h6" component="span">
                      Network Infrastructure Design
                    </Typography>
                  </Box>
                  <Stack
                    display="flex"
                    direction="row"
                    alignItems="left"
                    sx={{ flexWrap: "wrap", maxWidth: "100%" }}
                  >
                    <Chip
                      label="WLAN"
                      color="primary"
                      icon={<TbRouter />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="Switching"
                      color="info"
                      icon={<TbSwitch2 />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="IP Routing"
                      color="warning"
                      icon={<TbSwitch />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="SD Access"
                      color="secondary"
                      icon={<TbDna />}
                      sx={{ m: 0.5 }}
                    />
                  </Stack>
                </TimelineContent>
              }
            />
          </Timeline>
        </Grid>

        <Grid item xs={4}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <Timecomp
              Timedot={
                <TimelineDot color="primary">
                  <BsCodeSlash size={23} />
                </TimelineDot>
              }
              TimeContent={
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box>
                    <Typography variant="h6" component="span">
                      Coding
                    </Typography>
                  </Box>
                  <Stack
                    display="flex"
                    direction="row"
                    alignItems="left"
                    sx={{ flexWrap: "wrap", maxWidth: "100%" }}
                  >
                    <Chip
                      label="Python"
                      color="error"
                      icon={<FaPython />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="APIs"
                      color="secondary"
                      icon={<TbApi />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="HTML"
                      color="warning"
                      icon={<FaHtml5 />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="css"
                      color="primary"
                      icon={<FaCss3 />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="JavaScript"
                      icon={<SiJavascript />}
                      sx={{ m: 0.5, bgcolor: "yellow", color: "black" }}
                    />
                    <Chip
                      label="Django"
                      color="success"
                      icon={<SiDjango />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="FastAPI"
                      color="default"
                      icon={<SiFastapi />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="React"
                      color="info"
                      icon={<FaReact />}
                      sx={{
                        m: 0.5,
                        bgcolor: (theme) => theme.palette.info.dark,
                      }}
                    />
                    <Chip
                      label="SQL"
                      color="info"
                      icon={<TbSql />}
                      sx={{
                        m: 0.5,
                        bgcolor: (theme) => theme.palette.info.light,
                      }}
                    />
                  </Stack>
                </TimelineContent>
              }
            />
            <Timecomp
              Timedot={
                <TimelineDot color="secondary">
                  <SiAzuredevops size={23} />
                </TimelineDot>
              }
              TimeContent={
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box>
                    <Typography variant="h6" component="span">
                      DevOps
                    </Typography>
                  </Box>
                  <Stack
                    display="flex"
                    direction="row"
                    alignItems="left"
                    sx={{ flexWrap: "wrap", maxWidth: "100%" }}
                  >
                    <Chip
                      label="Git"
                      color="warning"
                      icon={<BsGit />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="Docker"
                      color="info"
                      icon={<SiDocker />}
                      sx={{ m: 0.5 }}
                    />
                    <Chip
                      label="Jira"
                      color="info"
                      icon={<SiJira />}
                      sx={{
                        m: 0.5,
                        bgcolor: (theme) => theme.palette.info.dark,
                      }}
                    />
                  </Stack>
                </TimelineContent>
              }
            />
          </Timeline>
        </Grid>

        <Grid item xs={3}>
          <Timeline>
            <Timecomp
              Timedot={
                <TimelineDot
                  sx={{ bgcolor: (theme) => theme.palette.info.dark }}
                >
                  <MdOutlineSensors size={23} />
                </TimelineDot>
              }
              TimeContent={
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box>
                    <Typography variant="h6" component="span">
                      IoT
                    </Typography>
                  </Box>
                </TimelineContent>
              }
            />
            <Timecomp
              Timedot={
                <TimelineDot color="warning">
                  <FaAws size={23} />
                </TimelineDot>
              }
              TimeContent={
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box>
                    <Typography variant="h6" component="span">
                      AWS
                    </Typography>
                  </Box>
                </TimelineContent>
              }
            />
          </Timeline>
        </Grid>
      </Grid>
    </>
  );
}
