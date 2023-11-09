/* eslint-disable no-undef */
import reverseString from "./reverseString";

test("hello should be olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("123blastoff should be ffotsalb321", () => {
  expect(reverseString("123blastoff")).toBe("ffotsalb321");
});

test("&Uhsndek should be kednshU&", () => {
  expect(reverseString("&Uhsndek")).toBe("kednshU&");
});
