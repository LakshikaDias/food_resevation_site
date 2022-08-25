import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [
      {
        orderId: "1",
        foodType: "foodType1",
        size: "small",
        amount: "3",
        date: "jan 9, 2022",
        orderStatus: "new order",
      },
      {
        orderId: "2",
        foodType: "foodType2",
        size: "large",
        amount: "2",
        date: "apri 10, 2022",
        orderStatus: "new order",
      },
    ],
  },

  reducers: {
    makeNewOrder: (state, action) => {
      state.order.push(action.payload);
    },

    changeOrderStatus: (state, action) => {
      const orderStateChangeArray = state.order.map((order) => {
        if (action.payload.orderId == order.orderId) {
          return action.payload;
        } else {
          return order;
        }
      });
      state.order = orderStateChangeArray;
    },
  },
});

export const { makeNewOrder, changeOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
