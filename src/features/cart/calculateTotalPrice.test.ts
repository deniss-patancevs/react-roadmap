import { describe, expect, it } from "vitest";
import { calculateTotalPrice } from "./calculateTotalPrice";

describe("calculateTotalPrice", () => {
  it("calculates total price", () => {
    expect(calculateTotalPrice(100, 2)).toBe(200);
  });

  it("calculates total price for decimal values", () => {
    expect(calculateTotalPrice(19.99, 3)).toBeCloseTo(59.97);
  });

  it("returns 0 when quantity is 0", () => {
    expect(calculateTotalPrice(100, 0)).toBe(0);
  });

  it("returns 0 when price is 0", () => {
    expect(calculateTotalPrice(0, 5)).toBe(0);
  });

  it("throws an error for negative price", () => {
    expect(() => calculateTotalPrice(-100, 2)).toThrow();
  });

  it("throws an error for negative quantity", () => {
    expect(() => calculateTotalPrice(100, -2)).toThrow();
  });

  it("throws an error for NaN price", () => {
    expect(() => calculateTotalPrice(NaN, 2)).toThrow();
  });

  it("throws an error for NaN quantity", () => {
    expect(() => calculateTotalPrice(100, NaN)).toThrow();
  });

  it("throws an error for infinite price", () => {
    expect(() => calculateTotalPrice(Infinity, 2)).toThrow();
  });

  it("throws an error for infinite quantity", () => {
    expect(() => calculateTotalPrice(100, Infinity)).toThrow();
  });
});
