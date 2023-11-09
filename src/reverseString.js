export default function reverseString(string) {
  const strArr = string.split("");
  strArr.reverse();
  return strArr.join("");
}
