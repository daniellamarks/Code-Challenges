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

  // let array = [str];
  // let newString = str.slice(1, str.length);
  // array.push(newString);
  // let secondNewString = newString.slice(1, str.length);
  // array.push(secondNewString);
  // let thirdNewString = secondNewString.slice(1, str.length);
  // array.push(thirdNewString);

  // return array;

  // for (let word of str) {
  //   let newString = str.slice(1, str.length);
  //   array.push(newString);
  // } 
  // console.log(array);

  let array = [str];
  let splitString = str.split('');
  console.log('original ' + splitString);
  for (let i = 1; i < splitString.length + 1; i++) {
    let sliced = splitString.slice(i).join('');
    array.push(sliced);
  } return array;
}

export function wordsToCharList(str) {
  let char = str.split('');
  return char;
}

export function listFoods(recipe){
  const array = recipe.ingredients;
  const map1 = array.map(item => item.split(' ').slice(2).join(' '));

  console.log(map1);
  return map1;
}

export function stepActions(recipe){
  const array = recipe.steps;
  const map1 = array.map(item => 
    item.split(' ')[0]);
  // map1.push([0]);
  return map1;
}

export function removeLastCharacters(str, numberOfCharacters){
  if (numberOfCharacters > str.length) {return '';
  } else if (numberOfCharacters < 0) {return str;
  } else {return str.slice(0, str.length - numberOfCharacters);
  }};

