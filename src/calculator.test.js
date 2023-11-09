/* eslint-disable no-undef */
import calculator from "./calculator";

test("calculator.add(2, 5) should equal 7", () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test("calculator.subtract(17, 3) should equal 14", () => {
  expect(calculator.subtract(17, 3)).toBe(14);
});

test("calculator.divide(25, 5) should equal 5", () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

test("calculator.multiply(7, 7) should equal 49", () => {
  expect(calculator.multiply(7, 7)).toBe(49);
});
