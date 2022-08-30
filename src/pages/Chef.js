import React from "react";

import { useSelector } from "react-redux";

import AddFoodForm from "../components/AddFoodForm";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";
import Order from "../components/Order";

import { Container, Grid, Typography } from "@mui/material";

const Chef = () => {
  const foodObjectArray = useSelector((state) => state.food.food);
  const orderObjectArray = useSelector((state) => {
    return state.order.order;
  });

  return (
    <div>
      <Container>
        <Navbar />

        {/* Card : Banner card */}
        <Grid container marginTop={9} marginBottom={10}>
          <BannerCard img="https://p2d7x8x2.stackpathcdn.com/content/uploads/2020/01/Exe.-Chef-Paulo-Airaudo-5-640x427.jpg" />
        </Grid>

        {/* Accordian:  order Accordion list */}
        <Grid
          container
          justifyContent="center"
          marginTop={10}
          marginBottom={10}
          sx={{ border: 1, borderColor: "primary.main", borderRadius: 5 }}
          padding={10}
        >
          <Grid container justifyContent="center" paddingBottom={5}>
            <Typography fontSize={40}>Orders......</Typography>
          </Grid>

          {orderObjectArray.map((order, id) => {
            return (
              <Grid container justifyContent="center">
                <Order key={id} order={order} />
              </Grid>
            );
          })}
        </Grid>

        {/* Form: Form which add food items */}
        <Grid
          container
          justifyContent="center"
          marginTop={10}
          marginBottom={10}
        >
          <AddFoodForm />
        </Grid>

        <Grid container>
          <FoodCard foodList={foodObjectArray} page="chef" />
        </Grid>
      </Container>
    </div>
  );
};

export default Chef;
