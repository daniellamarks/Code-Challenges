export function getHouses(obj) {
  return Object.values(obj).map((object) => object.house);
}

export function updateNumbers(obj) {
  let arrayOuter = Object.entries(obj);
  return arrayOuter.map(arrayItem => `${arrayItem[0]}: ${arrayItem[1]}`);

}

export function totalCharacters(arr) {
}

export function hasChildrenEntries(arr, character) {
} 

export function sortByChildren(arr){
} 

// arr.map(name => 
//   name[0].toUpperCase() + name.slice(1).toLowerCase()
