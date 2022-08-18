import React, { useState } from "react";

import { useDispatch } from "react-redux/es/exports";

import { deleteFoodById } from "../slices/foodSlice";

import {
  Button,
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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const FoodCard = (props) => {
  const [dele, setDele] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {props.foodList.map((food, id) => {
            return (
              <Grid key={id} item xs={12} sm={6} md={4}>
                <Card sx={{ maxWith: 40 }}>
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
                    {props.page != "customer" ? (
                      <>
                        <IconButton
                          aria-label="delete"
                          size="large"
                          sx={{ color: red[500] }}
                          onClick={() => {
                            setDele(true);
                            if (dele == true) {
                              dispatch(deleteFoodById(food.title));
                            }
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton
                          aria-label="edit"
                          size="large"
                          color="success"
                        >
                          <EditIcon />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton size="large" sx={{ color: red[500] }}>
                          <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton size="large" color="primary">
                          <ShareIcon />
                        </IconButton>
                      </>
                    )}
                    <Link to={`/foods/${food.title}`}>
                      <Button>See More</Button>
                    </Link>
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
