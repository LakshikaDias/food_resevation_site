import { Box, Button, Container, TextField, Row } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BannerCard from "../components/BannerCard";
import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";
import { addNewFood } from "../slices/foodSlice";

const Cook = () => {
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
  const foodObjectArray = useSelector((state) => state.food.food);
  return (
    <div>
      <Container>
        <Navbar />
        <BannerCard />
        <br />
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

        {/* <form>
          <label>
            Upload Image:
            <input
              name="image"
              type="text"
              value={addFood.image}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={addFood.title}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Description:
            <input
              name="description"
              type="text"
              value={addFood.description}
              onChange={handleChange}
            ></input>
          </label>
        </form> */}
        <br />
        <FoodCard foodList={foodObjectArray} />
      </Container>
    </div>
  );
};

export default Cook;
