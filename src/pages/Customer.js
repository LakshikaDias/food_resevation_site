import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";

import Navbar from "../components/Navbar";

const Customer = () => {
  const foodObjectArray = useSelector((state) => state.food.food);
  // console.log("food", foodObjectArray);
  return (
    <div>
      <Container>
        <Navbar />
        <br />
        <br />
        <br />
        <BannerCard />
        <br />
        <FoodCard foodList={foodObjectArray} page="customer" />
      </Container>
    </div>
  );
};

export default Customer;
