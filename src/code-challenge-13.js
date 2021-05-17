
export const sortByChildren = (charArray) => {
    const result = charArray.sort((x, y) => x.children - y.children);
    console.log(result)
    return result
  };


export const containsW = (str) => {
  if (str.match(/w/)) {
    return true;
  } else {
    return false;
  }
};

export const isNum = (input) => {
  if (/\d+/.test(input)) {
    return true;
  } else {
    return false;
  }
};

export const containsWorld = (input) => {
  if (/world/.test(input)) {
    return true;
  } else {
    return false;
  }
};