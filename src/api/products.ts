import { api } from "./client";

import type { Product } from "@/types/product";

export function getProducts() {
  return api<Product[]>("/products");
}

export function getProduct(id: number) {
  return api<Product>(`/products/${id}`);
}
