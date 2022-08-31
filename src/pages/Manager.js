import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";

import { deleteAllfoods } from "../slices/foodSlice";

import {
  Button,
  Container,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import Footer from "../components/Footer";

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

        {/* Card: Banner card */}
        <Grid container marginTop={9} marginBottom={10}>
          <BannerCard img="https://upserve.com/media/sites/2/restaurant-manager-and-chef-looking-at-licenses.jpg" />
        </Grid>

        {/* Table: Order Details Table */}
        <Grid
          container
          padding={5}
          sx={{ border: 1, borderColor: "primary.main", borderRadius: "16px" }}
        >
          <Grid container justifyContent="center" marginBottom={5}>
            <Typography variant="h4"> Order Details Board</Typography>
          </Grid>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order Id</TableCell>
                  <TableCell>Food Type</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Order Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderObjectArray.map((order, id) => {
                  return (
                    <>
                      <TableRow key={id}>
                        <TableCell>{order.orderId}</TableCell>
                        <TableCell>{order.foodType}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.orderStatus}</TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Button: Delete All Button */}
        <Grid container justifyContent="center" padding={10}>
          <Button variant="contained" onClick={handleAllDelete}>
            <Typography padding={2}>Delete All Displayed Food Cards</Typography>
          </Button>
        </Grid>

        {/* Card: Food Item cards */}
        <FoodCard foodList={foodObjectArray} page="manager" />
      </Container>
      <Footer />
    </div>
  );
};

export default Manager;
