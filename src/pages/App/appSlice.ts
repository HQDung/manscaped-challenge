import { createSlice } from "@reduxjs/toolkit";
import { orderDetails } from "../../constants/data";
import { RootState } from "../../store";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    orderDetails,
  },
  reducers: {
    updateOrder: (state, action) => {
      state.orderDetails = action.payload;
    },
  },
});

export const { updateOrder } = appSlice.actions;

export const selectOrderDetails = (state: RootState) => state.app.orderDetails;

export default appSlice.reducer;
