export function returnTen(str) {
  const array = str.split('').slice(str.length - 10);
  console.log(array);
  return array;
}

export function findMax(matrix) {
  const joined = matrix[0].concat(matrix[1], matrix[2]);
  console.log(joined);
  const max = Math.max(...joined);
  return max
}