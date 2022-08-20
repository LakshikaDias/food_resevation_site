import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import EditFoodForm from "../components/EditFoodForm";

import { Container } from "@mui/system";
import { Button } from "@mui/material";

const FoodDetail = () => {
  const { id } = useParams();

  const foodObjectArray = useSelector((state) => {
    return state.food.food;
  });

  const selectedFood = foodObjectArray.find((foods) => {
    return foods.title == id;
  });

  const [edit, setEdit] = useState(false);

  const [editFood, setEditFood] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleEdit = () => {
    setEdit(true);
    setEditFood({
      image: selectedFood.image,
      title: selectedFood.title,
      description: selectedFood.description,
    });
  };

  return (
    <>
      {edit == false ? (
        <Container>
          <Navbar />
          <img src={selectedFood.image} />
          <div>{selectedFood.title}</div>
          <div>{selectedFood.description}</div>
          <Button onClick={handleEdit}>Edit food </Button>
        </Container>
      ) : (
        <EditFoodForm foodData={editFood} />
      )}
    </>
  );
};

export default FoodDetail;
