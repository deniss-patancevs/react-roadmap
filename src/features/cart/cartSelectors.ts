import type { RootState } from "@/app/store/store";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartQuantity = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
