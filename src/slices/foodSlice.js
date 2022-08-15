import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { imag: "image1", name: "name1", description: "description1" },
  { imag: "image2", name: "name2", description: "description2" },
];

export const foodSlice = createSlice({
  name: "food",
  initialState,
});

export default foodSlice.reducer;
