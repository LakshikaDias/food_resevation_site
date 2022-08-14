import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import foods from "../assets/data";
import cook from "../assets/imagesList/cook.jpg";

const FoodCard = () => {
  return (
    <div>
      <Container>
        {foods.map((food) => {
          return (
            <Card sx={{ maxWith: 40 }}>
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
          );
        })}
      </Container>
    </div>
  );
};

export default FoodCard;
