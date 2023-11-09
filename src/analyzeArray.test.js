/* eslint-disable no-undef */
import analyzeArray from "./analyzeArray";

test("Correctly analyzes array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Correctly analyzes array", () => {
  expect(analyzeArray([32, 18, 94, 46, 63, 22, 77])).toEqual({
    average: 50.29,
    min: 18,
    max: 94,
    length: 7,
  });
});
