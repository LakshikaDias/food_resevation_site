import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import EditFoodForm from "../components/EditFoodForm";

import { Container } from "@mui/system";
import { Button } from "@mui/material";
import Footer from "../components/Footer";

const FoodDetail = () => {
  const { id, user } = useParams();

  const foodObjectArray = useSelector((state) => {
    return state.food.food;
  });

  const selectedFood = foodObjectArray.find((foods) => {
    return foods.title == id;
  });

  const [edit, setEdit] = useState(false);

  const [editFood, setEditFood] = useState({
    id: "",
    image: "",
    title: "",
    description: "",
  });

  const handleEdit = () => {
    setEdit(true);
    setEditFood({
      id: selectedFood.id,
      image: selectedFood.image,
      title: selectedFood.title,
      description: selectedFood.description,
    });
  };

  return (
    <>
      {edit == false ? (
        <>
          <Container>
            <Navbar />
            <img src={selectedFood.image} />
            <div>{selectedFood.title}</div>
            <div>{selectedFood.description}</div>

            {user != "customer" ? (
              <Button onClick={handleEdit}>Edit food </Button>
            ) : (
              <></>
            )}
          </Container>
          <Footer />
        </>
      ) : (
        <EditFoodForm foodData={editFood} />
      )}
    </>
  );
};

export default FoodDetail;
