export function replaceZeroes(string){
  //<solution>
  const result = string.replace(/0/g, `zero`);
  console.log(result);

  return result;

};

export function validatePin(pin) {

  //<solution>
  if (pin.match(/\d{4}$/gm)) {
    return true;
  } else { return false;
  }

};