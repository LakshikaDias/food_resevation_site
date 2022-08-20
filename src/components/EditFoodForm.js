import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { editFoodItem } from "../slices/foodSlice";

import { Box, Button, Container, TextField } from "@mui/material";

const EditFoodForm = (props) => {
  console.log("editfoodform", props);

  const [editFood, setEditFood] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setEditFood({ ...editFood, [e.target.name]: e.target.value });
  };
  const distpatch = useDispatch();

  const handleSubmit = () => {
    distpatch(editFoodItem(editFood));
  };

  return (
    <div>
      <Container>
        <Box
          component="form"
          sx={{
            width: 300,
            height: 300,
            p: 2,
            border: "1px dashed grey",
          }}
        >
          <TextField
            name="image"
            value={props.foodData.image}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            name="title"
            type="text"
            value={props.foodData.title}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            name="description"
            type="text"
            value={props.foodData.description}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            Save edit Foods
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default EditFoodForm;
