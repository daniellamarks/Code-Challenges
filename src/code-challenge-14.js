export function replaceZeroes(string){
  //<solution>
  const result = string.replace(/0/gm, `zero`);
  console.log(result);

  return result;

};