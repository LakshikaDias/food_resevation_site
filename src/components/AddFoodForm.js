import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewFood } from "../slices/foodSlice";

import { Box, Button, Container, TextField } from "@mui/material";

const AddFoodForm = () => {
  const [addFood, setAddFood] = useState({
    image: "",
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setAddFood({ ...addFood, [e.target.name]: e.target.value });
  };
  const distpatch = useDispatch();

  const handleSubmit = () => {
    distpatch(addNewFood(addFood));
    setAddFood({ image: " ", title: " ", description: " " });
  };
  // console.log("addFood", addFood);
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
            label="Image"
            name="image"
            value={addFood.image}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            label="Title"
            name="title"
            type="text"
            value={addFood.title}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            label="Description"
            name="description"
            type="text"
            value={addFood.description}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            Add new Foods
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default AddFoodForm;
