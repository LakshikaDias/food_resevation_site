import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";

import { deleteAllfoods } from "../slices/foodSlice";

import { Button, Container } from "@mui/material";

const Manager = () => {
  const [deleteAll, setDeleteAll] = useState(false);

  const foodObjectArray = useSelector((state) => state.food.food);

  const dispatch = useDispatch();

  const handleAllDelete = () => {
    setDeleteAll(true);
    dispatch(deleteAllfoods(deleteAll));
  };

  return (
    <div>
      <Container>
        <Navbar />
        <BannerCard />
        <Button onClick={handleAllDelete}>Delete All items</Button>
        <FoodCard foodList={foodObjectArray} page="cook" />
      </Container>
    </div>
  );
};

export default Manager;
