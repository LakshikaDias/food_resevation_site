import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: [
    { imag: "image1", title: "title1", description: "description1" },
    { imag: "image2", title: "title2", description: "description2" },
    { imag: "image3", title: "title3", description: "description3" },
  ],
};

export const foodSlice = createSlice({
  name: "food",
  initialState,

  reducers: {
    // Add new food item
    addNewFood: (state, action) => {
      console.log("foodslice", action.payload);
      state.food.push(action.payload);
    },
  },
});

export const { addNewFood } = foodSlice.actions;
export default foodSlice.reducer;
