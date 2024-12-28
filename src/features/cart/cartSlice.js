import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import { toast } from "react-toastify";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      toast.success("Your cart has been cleared!");
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(({ id }) => id !== payload);
      toast.success("Item removed from your cart!");
    },
    increaseItem: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      item.amount = item.amount + 1;
      toast.success("Item quantity increased!");
    },
    decreaseItem: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      item.amount = item.amount - 1;
      toast.success("Item quantity decreased!");
    },

    calculateCartTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increaseItem, decreaseItem, calculateCartTotals } = cartSlice.actions;

export default cartSlice.reducer;
