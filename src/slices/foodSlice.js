import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: [
    {
      image: "https://pbs.twimg.com/media/FTNbp3WXEAAIZcb.jpg",
      title: "title1",
      description: "description1",
    },
    {
      image:
        "https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg",
      title: "title2",
      description: "description2",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRASoL0n2zQGT0QCV-3X_nVxHgLMONij7YQ&usqp=CAU",
      title: "title3",
      description: "description3",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/002/983/589/large_2x/fresh-delicious-italian-pizza-with-four-types-of-meat-on-a-dark-concrete-background-photo.JPG",
      title: "title4",
      description: "description4",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
      title: "title5",
      description: "description5",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-ThWFmtixABPByYW5Hr6GM3KDXScftI1bw&usqp=CAU",
      title: "title6",
      description: "description6",
    },
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
    deleteFoodById: (state, action) => {
      console.log("foodSlisedelete", action.payload);

      const deleteFoodArray = state.food.filter((food) => {
        if (food.title != action.payload) {
          return food;
        }
      });

      state.food = deleteFoodArray;
    },
  },
});

export const { addNewFood, deleteFoodById } = foodSlice.actions;
export default foodSlice.reducer;
