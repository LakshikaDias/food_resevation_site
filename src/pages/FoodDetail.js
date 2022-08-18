import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";

import { Container } from "@mui/system";

const FoodDetail = () => {
  const { id } = useParams();

  const foodObjectArray = useSelector((state) => {
    return state.food.food;
  });

  const selectedFood = foodObjectArray.find((foods) => {
    return foods.title == id;
  });

  return (
    <>
      <Container>
        <Navbar />
        <img src={selectedFood.image} />
        <div>{selectedFood.title}</div>
        <div>{selectedFood.description}</div>
      </Container>
    </>
  );
};

export default FoodDetail;
