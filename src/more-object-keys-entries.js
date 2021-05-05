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
  console.log(spouse2);
  return name.length + spouse2.length + merged.length
  ;
}

export function hasChildrenEntries(arr, character) {
} 

export function sortByChildren(arr){
} 

// arr.map(name => 
//   name[0].toUpperCase() + name.slice(1).toLowerCase()
