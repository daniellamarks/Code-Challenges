export function getHouses(obj) {
  return Object.values(obj).map((object) => object.house);
}

export function updateNumbers(obj) {
  let arrayOuter = Object.entries(obj);
  return arrayOuter.map(arrayItem => `${arrayItem[0]}: ${arrayItem[1]}`);
}

export function totalCharacters(arr) {
  let name = arr.map(a => a.name);
  let spouse = arr.map(a => a.spouse);
  let spouse2 = [];
  for (let item of spouse) {
    if (item) {
      spouse2.push(item);
    }
  }
  let children = arr.map(a => a.children);
  let merged = [].concat(...children);
  return name.length + spouse2.length + merged.length
  ;
}

// arr.filter(string => {
//   if (string.length < 5) return string; else return false;
// })

export function hasChildrenEntries(arr, character) {
  let array;
  for (let item of arr) {
    array = Object.entries(item);
    console.log(array);
    if (character === array[0][1]) {array[2][1].length > 0 ? true : false}
  } ;
  // if (character.name && character.children) return true;
} 


  // if (character.name && character.children) return true;

export function sortByChildren(arr){
  return arr.sort((x, y) => x.children.length - y.children.length);
} 




