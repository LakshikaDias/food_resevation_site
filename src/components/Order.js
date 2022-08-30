import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { changeOrderStatus } from "../slices/orderSlice";

import {
  Accordion,
  AccordionSummary,
  Avatar,
  Grid,
  ListItemAvatar,
  ListItemText,
  Typography,
  AccordionDetails,
  MenuItem,
  TextField,
} from "@mui/material";
import LunchDiningRoundedIcon from "@mui/icons-material/LunchDiningRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Order = (props) => {
  const [orderStatus, setOrderStatus] = useState("New order");

  const statusTypes = ["New order", "Cooking", "Done", "Delivered"];

  const dispatch = useDispatch();

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemAvatar>
            <Avatar>
              <LunchDiningRoundedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={props.order.foodType}
            secondary={props.order.date}
          />
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item>Size: {props.order.size}</Grid>
            <Grid item>Amout: {props.order.amount}</Grid>
          </Grid>
          {/* Feature: Select order status */}
          <br />
          Food Status:
          <TextField
            select
            value={orderStatus}
            name="Food status"
            label="Food status"
            onChange={(e) => {
              setOrderStatus(e.target.value);
              dispatch(
                changeOrderStatus({
                  orderId: props.order.orderId,
                  foodType: props.order.foodType,
                  size: props.order.size,
                  amount: props.order.amount,
                  date: props.order.date,
                  orderStatus: e.target.value,
                })
              );
            }}
            helperText="Please select order status here"
          >
            {statusTypes.map((status, id) => {
              return (
                <MenuItem key={id} value={status}>
                  <Typography>{status}</Typography>
                </MenuItem>
              );
            })}
          </TextField>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Order;
