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
        <BannerCard img="https://upserve.com/media/sites/2/restaurant-manager-and-chef-looking-at-licenses.jpg" />

        <br />
        <br />
        <div>
          {orderObjectArray.map((order) => {
            return (
              <div>
                <div>{order.orderId}</div>
                <div>{order.orderStatus}</div>
              </div>
            );
          })}
        </div>

        <Button onClick={handleAllDelete}>Delete All items</Button>
        <FoodCard foodList={foodObjectArray} page="cook" />
      </Container>
    </div>
  );
};

export default Manager;
