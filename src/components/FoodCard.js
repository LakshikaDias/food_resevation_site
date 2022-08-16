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

const FoodCard = (props) => {
  // console.log("helooo", foodList);
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {props.foodList.map((food, id) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card key={id} sx={{ maxWith: 40 }}>
                  <CardHeader title={food.title} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={food.image}
                    alt={food.title}
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
