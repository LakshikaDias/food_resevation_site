import React from "react";

import { Grid, Typography, Box } from "@mui/material";
import { Container } from "@mui/system";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid container sx={6}>
              <Typography>hiii</Typography>
            </Grid>

            <Grid>
              <Grid>
                <Grid sx={6}>pppppppp</Grid>
                <Grid sx={6}>kkkkkkkkk</Grid>
              </Grid>
              <Grid container>
                <Grid>llllllll</Grid>
                <Grid>nnnnnnnnn</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
