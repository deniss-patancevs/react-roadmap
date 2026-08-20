import { describe, expect, it } from "vitest";
import type { Product } from "@/types/product";

import reducer, {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "./cartSlice";

const product: Product = {
  id: "1",
  name: "Smartwatch",
  price: 199.99,
  currency: "€",
  year: 2022,
  ram: "1GB",
  warranty: 2,
  description_short:
    "Stay connected on the go with this sleek and versatile smartwatch.",
  description_full:
    "This smartwatch offers a range of features including fitness tracking, notifications, and voice commands. Its long-lasting battery and durable design make it perfect for everyday wear.",
  features: [
    "Fitness tracking",
    "Notifications",
    "Voice commands",
    "Long battery life",
    "Durable design",
  ],
  image: "smartwatch.png",
  stock: 10,
};

const createCartState = (quantity: number) => ({
  items: [
    {
      product,
      quantity,
    },
  ],
});

// add to cart
describe("addToCart", () => {
  it("adds a new product with quantity 1", () => {
    const state = reducer(undefined, addToCart(product));

    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual({
      product,
      quantity: 1,
    });
  });
});

// increases quantity
it("increases quantity when the product is already in the cart", () => {
  const initialState = createCartState(1);

  const state = reducer(initialState, addToCart(product));

  expect(state.items).toHaveLength(1);
  expect(state.items[0].quantity).toBe(2);
});

// remove from cart
describe("removeFromCart", () => {
  it("removes the product from the cart", () => {
    const initialState = createCartState(2);

    const state = reducer(initialState, removeFromCart(product.id));

    expect(state.items).toHaveLength(0);
  });
});

it("does nothing when the product is not in the cart", () => {
  const initialState = createCartState(2);

  const state = reducer(initialState, removeFromCart("non-existing-id"));

  expect(state.items).toEqual(initialState.items);
});

// increase quantity
describe("increaseQuantity", () => {
  it("increases product quantity by 1", () => {
    const initialState = createCartState(2);

    const state = reducer(initialState, increaseQuantity(product.id));

    expect(state.items[0].quantity).toBe(3);
  });
});

it("does nothing when the product is not in the cart", () => {
  const initialState = createCartState(2);

  const state = reducer(initialState, increaseQuantity("non-existing-id"));

  expect(state.items).toEqual(initialState.items);
});

// decrease quantity
describe("decreaseQuantity", () => {
  it("decreases product quantity by 1", () => {
    const initialState = {
      items: [
        {
          product,
          quantity: 3,
        },
      ],
    };

    const state = reducer(initialState, decreaseQuantity(product.id));

    expect(state.items[0].quantity).toBe(2);
  });
});

it("removes the product when its quantity is 1", () => {
  const initialState = createCartState(1);

  const state = reducer(initialState, decreaseQuantity(product.id));

  expect(state.items).toHaveLength(0);
});

//  clear cart
describe("clearCart", () => {
  it("removes all products from the cart", () => {
    const initialState = createCartState(2);

    const state = reducer(initialState, clearCart());

    expect(state.items).toHaveLength(0);
  });
});
