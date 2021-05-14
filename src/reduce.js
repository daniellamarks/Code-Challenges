
// export function toLastNames = people => {

// };

export function addValues(array) {
  const sum = array.reduce((total, currentAmount) => total + currentAmount);
  return sum;
} 

export function addPurchases(array) {
  const items = array.map(item => item.purchasePrice);
  const sum = items.reduce((total, currentAmount) => 
    total + currentAmount);
  return sum;
};

export function countNumberOfElements(array) {
  const sum = array.reduce((total, current) => 
    total + 1);
  return sum;
}