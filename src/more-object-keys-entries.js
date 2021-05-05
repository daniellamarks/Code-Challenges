export function getHouses(obj) {
  return Object.values(obj).map((object) => object.house);
}

export function updateNumbers(obj) {
  let array = Object.entries(obj);
  let strings = Object.fromEntries(array);
  return strings;
}

export function totalCharacters(arr) {
}

export function hasChildrenEntries(arr, character) {
} 

export function sortByChildren(arr){
} 