export function calculateTotalPrice(price: number, quantity: number): number {
  if (!Number.isFinite(price) || price < 0) {
    throw new Error("Price must be a non-negative finite number");
  }

  if (!Number.isFinite(quantity) || quantity < 0) {
    throw new Error("Quantity must be a non-negative finite number");
  }

  return price * quantity;
}
