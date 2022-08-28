import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";

import { makeNewOrder } from "../slices/orderSlice";

import {
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

const Customer = () => {
  const foodObjectArray = useSelector((state) => state.food.food);

  const sizeTypes = ["small", "large", "medium"];
  const amount = ["1", "2", "3", "4", "5", "6"];

  const [order, setOrder] = useState({
    orderId: Math.floor(Math.random() * 1000),
    foodType: "title1",
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

        <Grid>
          <BannerCard img="https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000" />
        </Grid>

        {/* Feature: make order Form */}
        <Grid
          container
          sx={{ border: 1, borderColor: "primary.main", borderRadius: 5 }}
          marginTop={10}
          marginBottom={10}
          padding={10}
        >
          <Grid container justifyContent="center" padding={5}>
            <Typography>Make Order</Typography>
          </Grid>

          <Grid container>
            <Grid container justifyContent="center">
              {/* InputField: Food Type */}
              <Grid marginRight={5}>
                <Typography>Food Type:</Typography>
              </Grid>
              <Grid>
                <TextField
                  select
                  name="foodType"
                  value={order.foodType}
                  onChange={handleChange}
                  helperText="Please select your food type here"
                >
                  {foodObjectArray.map((option, id) => {
                    return (
                      <MenuItem key={id} value={option.title}>
                        <Typography textAlign="center">
                          {option.title}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </TextField>
              </Grid>

              {/* InputField : Size */}
              <Grid>
                <Typography marginRight={5} marginLeft={5}>
                  Size:
                </Typography>
              </Grid>
              <Grid>
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
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              {/* InputField: Amount */}
              <Grid>
                <Typography marginRight={5}>Amount:</Typography>
              </Grid>
              <Grid>
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
              </Grid>

              {/* InputField: Date */}
              <Grid marginLeft={5}>
                <Typography marginRight={5}>Date:</Typography>
              </Grid>
              <Grid>
                <TextField
                  name="date"
                  value={order.date}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" marginTop={5}>
            <Button variant="contained" onClick={handleSubmit}>
              Order Food
            </Button>
          </Grid>
        </Grid>

        <FoodCard foodList={foodObjectArray} page="customer" />
      </Container>
    </div>
  );
};

export default Customer;
