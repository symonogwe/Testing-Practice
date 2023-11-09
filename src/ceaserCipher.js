/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-escape */
function ceaserCipher(string, shiftPos) {
  const strArr = string.split("");
  const lowerCaseArr = strArr.map((item) => item.toLowerCase());
  const alphabet = /^[a-zA-Z]+$/;

  const ciphered = lowerCaseArr.map((item) => {
    if (!alphabet.test(item)) return item;
    return shiftChar(item, shiftPos);
  });

  return ciphered.join("");
}

// utilities
const alphabetArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function shiftChar(char, shiftPos) {
  const index = alphabetArr.indexOf(char);

  const sliced1 = alphabetArr.slice(index);
  const sliced2 = alphabetArr.slice(0, index);

  const finalArr = sliced1.concat(sliced2);

  return finalArr[shiftPos];
}

export default ceaserCipher;
