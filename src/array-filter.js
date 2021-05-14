export function evensOnly(arr) {
  return arr.filter(number => number % 2 === 0); 
}

export function fiveCharactersOrFewerOnly(arr){
  const filtered = arr.filter(word => word.length <= 5); 
  return filtered.sort((x, y) => x.length - y.length);
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(person => person.member === true);
}

export function ofAge(arr){
  return arr.filter(person => person.age >= 80);
}

