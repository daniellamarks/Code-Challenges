export function returnTen(str) {
  const array = str.split('').slice(str.length - 10);
  console.log(array);
  return array;
}