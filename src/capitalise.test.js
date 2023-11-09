/* eslint-disable no-undef */
import capitaliseFirstLetter from "./capitalise";

test("kenya should be Kenya", () => {
  expect(capitaliseFirstLetter("kenya")).toBe("Kenya");
});

test("house should be House", () => {
  expect(capitaliseFirstLetter("house")).toBe("House");
});
