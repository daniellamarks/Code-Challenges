
export const sortByChildren = (charArray) => {
 
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