import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: [
    {
      id: 1,
      image: "https://pbs.twimg.com/media/FTNbp3WXEAAIZcb.jpg",
      title: "title1",
      description: "description1",
    },
    {
      id: 2,
      image:
        "https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg",
      title: "title2",
      description: "description2",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMRASoL0n2zQGT0QCV-3X_nVxHgLMONij7YQ&usqp=CAU",
      title: "title3",
      description: "description3",
    },
    {
      id: 4,
      image:
        "https://static.vecteezy.com/system/resources/previews/002/983/589/large_2x/fresh-delicious-italian-pizza-with-four-types-of-meat-on-a-dark-concrete-background-photo.JPG",
      title: "title4",
      description: "description4",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
      title: "title5",
      description: "description5",
    },
    {
      id: 6,
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
      // console.log("foodslice", action.payload);
      state.food.push(action.payload);
    },
    deleteFoodById: (state, action) => {
      // console.log("foodSlisedelete", action.payload);

      const deleteFoodArray = state.food.filter((food) => {
        if (food.title != action.payload) {
          return food;
        }
      });

      state.food = deleteFoodArray;
    },

    editFoodItem: (state, action) => {
      // console.log("hiii", action.payload.id);
      // console.log("hiii", action.payload);
      const editArray = state.food.map((food) => {
        if (food.id == action.payload.id) {
          return action.payload;
        } else {
          return food;
        }
      });

      // console.log("viranga", editArray);
      state.food = editArray;
    },

    deleteAllfoods: (state, action) => {
      if (action.payload == true) {
        state.food = [];
      }
    },
  },
});

export const { addNewFood, deleteFoodById, editFoodItem, deleteAllfoods } =
  foodSlice.actions;
export default foodSlice.reducer;
