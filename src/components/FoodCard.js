import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import foods from "../assets/data";

const FoodCard = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {foods.map((food, id) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card key={id} sx={{ maxWith: 40 }}>
                  <CardHeader title={food.name} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={food.imag}
                    alt="resturant_image"
                  />
                  <CardContent>
                    <Typography>{food.description}</Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share"></IconButton> */}
                    {/* <ExpandMore aria-label="show more"></ExpandMore> */}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default FoodCard;
