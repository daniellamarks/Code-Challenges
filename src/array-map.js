export function doubleNumbers(arr) {
  return arr.map(n => n * 2);
}

export function stringItUp(arr) {
  return arr.map(n => n.toString());
}

export function capitalizeNames(arr) {

//   const lowercase = arr.map(name => name.toLowerCase());
    // console.log(lowercase);
  return arr.map(name => 
    name[0].toUpperCase() + name.slice(1).toLowerCase()

)}; 

export function namesOnly(arr){
  return arr.map(n => n.name);
}

export function makeStrings(arr){

  return arr.map(actor => {
    if (actor.age < 18) {
      return `${actor.name} is under age!!`;
    } else {
      return `${actor.name} can go to The Matrix`;
    }; 
  });};

export function readyToPutInTheDOM(arr){
  return arr.map(n => `<h1>${n.name}</h1><h2>${n.age}</h2>`);
}