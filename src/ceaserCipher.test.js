/* eslint-disable no-undef */
import ceaserCipher from "./ceaserCipher";

test("ceaserCipher(attack at dawn, 5) should be 'fyyfhp fy ifbs'", () => {
  expect(ceaserCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
});

test("ceaserCipher(wake up, 5) should be 'ycmg wr'", () => {
  expect(ceaserCipher("wake up", 2)).toBe("ycmg wr");
});

test("ceaserCipher(The big shoe is red., 13) should be 'gur ovt fubr vf erq.'", () => {
  expect(ceaserCipher("The big shoe is red.", 13)).toBe("gur ovt fubr vf erq.");
});

test("Javascript, Oh! It is the best language ever!! should be 'ridiakzqxb, wp! qb qa bpm jmab tivociom mdmz!!'", () => {
  expect(
    ceaserCipher("Javascript, Oh! It is the best language ever!!", 8)
  ).toBe("ridiakzqxb, wp! qb qa bpm jmab tivociom mdmz!!");
});
