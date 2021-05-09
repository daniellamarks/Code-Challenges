export function howMuchPencil(str) {
  //takes off first letter 
  //push to new array
  //use new string in loop and take off first letter of that
  // let array = ['Welcome'];
  // let newString = str.slice(1, str.length);
  // array.push(newString);
  // return array;
  // let array = [];
  // for (let i = 0; i < str.length; i++) {
  //   array.push(str.slice(1, str.length));
  // };
  // return array;

  // console.log(str.split(''));

  let array = [str];
  let newString = str.slice(1, str.length);
  array.push(newString);
  let secondNewString = newString.slice(1, str.length);
  array.push(secondNewString);
  let thirdNewString = secondNewString.slice(1, str.length);
  array.push(thirdNewString);
}

export function wordsToCharList(str) {
  let char = str.split('');
  return char;
}

export function listFoods(recipe){
  const array = recipe.ingredients;
  const map1 = array.map(item => item.slice(3, item.length));

  console.log(map1);

}

export function stepActions(recipe){
  const array = recipe.steps;
  const map1 = array.map(item => 
    item.split(' ')[0]);
  // map1.push([0]);
  return map1;
}

export function removeLastCharacters(str, numberOfCharacters){
  
}

