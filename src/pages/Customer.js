import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";

import { makeNewOrder } from "../slices/orderSlice";

import {
  Button,
  Container,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const Customer = () => {
  const foodObjectArray = useSelector((state) => state.food.food);

  const foodTypes = ["type1", "type2", "type3"];
  const sizeTypes = ["small", "large", "medium"];
  const amount = ["1", "2", "3", "4", "5", "6"];

  const [order, setOrder] = useState({
    orderId: Math.floor(Math.random() * 1000),
    foodType: "type1",
    size: "small",
    amount: "1",
    date: "date here",
    OrderStatus: "new order",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: [e.target.value] });
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(makeNewOrder(order));
    setOrder({
      orderId: "",
      foodType: "type1",
      size: "small",
      amount: "1",
      date: "date here",
    });
  };

  return (
    <div>
      <Container>
        <Navbar />
        <br />
        <br />
        <br />
        <BannerCard img="https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000" />
        <br />

        {/* Start make order feature */}
        <div>
          <div>Make order....</div>
          Food Type:
          <TextField
            select
            name="foodType"
            value={order.foodType}
            onChange={handleChange}
            helperText="Please select your food type here"
          >
            {foodTypes.map((option, id) => {
              return (
                <MenuItem key={id} value={option}>
                  <Typography textAlign="center">{option}</Typography>
                </MenuItem>
              );
            })}
          </TextField>
          <br />
          Size:
          <TextField
            select
            name="size"
            value={order.size}
            onChange={handleChange}
            helperText="Please select your food size here"
          >
            {sizeTypes.map((option, id) => {
              return (
                <MenuItem key={id} value={option}>
                  <Typography textAlign="center">{option}</Typography>
                </MenuItem>
              );
            })}
          </TextField>
          <br />
          Amount:
          <TextField
            name="amount"
            select
            value={order.amount}
            onChange={handleChange}
            helperText="Please select your food amount here"
          >
            {amount.map((option, id) => {
              return (
                <MenuItem key={id} value={option}>
                  <Typography textAlign="center">{option}</Typography>
                </MenuItem>
              );
            })}
          </TextField>
          <br />
          Date:
          <TextField name="date" value={order.date} onChange={handleChange} />
        </div>
        <Button variant="contained" onClick={handleSubmit}>
          Order Food
        </Button>
        {/* End make order feature */}

        <br />
        <FoodCard foodList={foodObjectArray} page="customer" />
      </Container>
    </div>
  );
};

export default Customer;
