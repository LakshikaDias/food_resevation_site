import React from "react";

import { useSelector } from "react-redux";

import AddFoodForm from "../components/AddFoodForm";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";
import Order from "../components/Order";

import { Container } from "@mui/material";

const Chef = () => {
  const foodObjectArray = useSelector((state) => state.food.food);
  const orderObjectArray = useSelector((state) => {
    return state.order.order;
  });

  return (
    <div>
      <Container>
        <Navbar />
        <br />
        <br />
        <br />
        <BannerCard img="https://p2d7x8x2.stackpathcdn.com/content/uploads/2020/01/Exe.-Chef-Paulo-Airaudo-5-640x427.jpg" />
        <br />

        {/* Start order Accordion */}
        <div>
          Orders......
          {orderObjectArray.map((order, id) => {
            return <Order key={id} order={order} />;
          })}
        </div>
        {/* End order Accordion */}

        <br />
        <AddFoodForm />
        <br />
        <FoodCard foodList={foodObjectArray} page="cook" />
      </Container>
    </div>
  );
};

export default Chef;
