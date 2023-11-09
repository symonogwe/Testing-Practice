function analyzeArray(array) {
  const sum = array.reduce((previous, current) => previous + current, 0);
  const arrayAverage = +(sum / array.length).toFixed(2);

  const sortedArr = array.sort((a, b) => a - b);

  const minValue = sortedArr[0];
  const maxValue = sortedArr[sortedArr.length - 1];
  const arrayLength = array.length;

  return {
    average: arrayAverage,
    min: minValue,
    max: maxValue,
    length: arrayLength,
  };
}

export default analyzeArray;
