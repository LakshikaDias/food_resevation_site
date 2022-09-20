import React from "react";

import { Grid, Typography, Box, IconButton } from "@mui/material";
import { Container } from "@mui/system";

import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <Container>
          <Grid container justifyContent="center" paddingTop={10}>
            <Grid>
              <IconButton>
                <ForwardToInboxOutlinedIcon />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton>
                <PhoneCallbackOutlinedIcon />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid>
              <Typography>Customer /</Typography>
            </Grid>
            <Grid>
              <Typography>Chef /</Typography>
            </Grid>
            <Grid>
              <Typography>Manager</Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" paddingBottom={10}>
            <Typography>@ 2022 Company Name</Typography>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
