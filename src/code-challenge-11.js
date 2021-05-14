export function returnTen(str) {
  const array = str.split('').slice(str.length - 10);
  console.log(array);
  return array;
}

export function findMax(matrix) {
  const joined = matrix[0].concat(matrix[1], matrix[2]);
  console.log(joined);
  const max = Math.max(...joined);
  return max;
}

export function totalSum(matrix) {
  const newArr = Array.prototype.concat(...matrix);
  console.log(newArr);
  let sum = 0;
  for (let number of newArr) {
    sum += number;
  }
  console.log(sum);
  return sum;
}

export function grandTotal(stores){
  //for each item in array take the [i] of that item and add it to the [i] index of the next item. 
}
