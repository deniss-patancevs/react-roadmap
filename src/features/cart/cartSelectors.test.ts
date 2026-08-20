import { describe, expect, it } from "vitest";
import type { RootState } from "@/app/store/store";
import type { Product } from "@/types/product";

import { selectCartQuantity, selectCartItemById } from "./cartSelectors";

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

const product2: Product = {
  id: "2",
  name: "Laptop",
  price: 899.99,
  currency: "€",
  year: 2025,
  ram: "8GB",
  warranty: 2,
  description_short:
    "Make your work and entertainment with you wherever you go with this laptop.",
  description_full:
    "This powerful laptop is designed for work, study, and entertainment. It provides smooth performance, a high-quality display, and enough memory for multitasking. Its lightweight design makes it easy to carry anywhere.",
  features: [
    "High performance processor",
    "Full HD display",
    "Fast SSD storage",
    "Portable design",
    "Long battery life",
  ],
  image: "laptop.png",
  stock: 10,
};

const createRootState = (items: RootState["cart"]["items"]): RootState => ({
  cart: {
    items,
  },
});

// cart quantity
describe("selectCartQuantity", () => {
  it("returns 0 when the cart is empty", () => {
    const state = createRootState([]);

    expect(selectCartQuantity(state)).toBe(0);
  });

  it("returns the total quantity of all cart items", () => {
    const state = createRootState([
      {
        product,
        quantity: 2,
      },
      {
        product: product2,
        quantity: 3,
      },
    ]);

    expect(selectCartQuantity(state)).toBe(5);
  });
});

// select item by id
describe("selectCartItemById", () => {
  it("returns the cart item with the specified product id", () => {
    const state = createRootState([
      {
        product,
        quantity: 2,
      },
    ]);

    expect(selectCartItemById(state, product.id)).toEqual({
      product,
      quantity: 2,
    });
  });

  it("returns undefined when the product is not in the cart", () => {
    const state = createRootState([
      {
        product,
        quantity: 2,
      },
    ]);

    expect(selectCartItemById(state, "non-existing-id")).toBeUndefined();
  });
});
