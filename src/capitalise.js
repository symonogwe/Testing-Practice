export default function capitaliseFirstLetter(string) {
  const strArr = string.split("");
  const firstLetter = strArr.shift();
  strArr.unshift(firstLetter.toUpperCase());
  return strArr.join("");
}
