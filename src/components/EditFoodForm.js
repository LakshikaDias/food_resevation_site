import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { editFoodItem } from "../slices/foodSlice";

import { Box, Button, Container, TextField } from "@mui/material";

const EditFoodForm = (props) => {
  console.log("editfoodform", props);

  const navigate = useNavigate();

  const [editFood, setEditFood] = useState({
    id: props.foodData.id,
    image: props.foodData.image,
    title: props.foodData.title,
    description: props.foodData.description,
  });

  console.log("bihann", props.foodData.id);

  const handleChange = (e) => {
    setEditFood({ ...editFood, [e.target.name]: e.target.value });
  };
  const distpatch = useDispatch();

  const handleSubmit = () => {
    distpatch(editFoodItem(editFood));
    navigate("/chef");
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
            placeholder={props.foodData.image}
            name="image"
            value={editFood.image}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            placeholder={props.foodData.title}
            name="title"
            type="text"
            value={editFood.title}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            placeholder={props.foodData.description}
            name="description"
            type="text"
            value={editFood.description}
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
