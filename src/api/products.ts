import { api } from "./client";

import type { Product } from "@/types/product";

export function getProducts() {
  return api<Product[]>("/products");
}

export function getProduct(id: string) {
  return api<Product>(`/products/${id}`);
}

export async function createProduct(
  product: Omit<Product, "id">,
): Promise<Product> {
  return api<Product>("/products", {
    method: "POST",
    body: product,
  });
}

export function updateProduct(product: Product): Promise<Product> {
  return api<Product>(`/products/${product.id}`, {
    method: "PUT",
    body: product,
  });
}

export function deleteProduct(id: string) {
  return api(`/products/${id}`, {
    method: "DELETE",
  });
}
