import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const BannerCard = (props) => {
  return (
    <Container>
      <Card sx={{ maxWidth: 1200 }}>
        <CardMedia
          component="img"
          height="500"
          image={props.img}
          alt="resturant_image"
        />
        <CardContent>
          <Typography textAlign="center">Food Restaurant</Typography>
          <Typography textAlign="center" variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BannerCard;
