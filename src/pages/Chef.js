import React from "react";

import { useSelector } from "react-redux";
import AddFoodForm from "../components/AddFoodForm";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";

import { Container } from "@mui/material";

const Chef = () => {
  const foodObjectArray = useSelector((state) => state.food.food);
  return (
    <div>
      <Container>
        <Navbar />
        <BannerCard />
        <br />
        <AddFoodForm />
        <br />
        <FoodCard foodList={foodObjectArray} page="cook" />
      </Container>
    </div>
  );
};

export default Chef;
