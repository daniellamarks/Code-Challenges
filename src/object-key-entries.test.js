import { getArrayOfKeysAndValues, getFilteredKey, sortedArraysByValuesLength, sortedKeys } from './object-keys-entries.js';

test('keys sorted smallest to largest by length', () => {
  const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; //arrange
  const output = sortedKeys(dataObject); 
  console.log(output)//act
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']); //assert
});

test('Given an object, return a new array that only includes the object key age.', () => {
  const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80, }; //arrange
  const output = getFilteredKey(dataObject); //act
  console.log(output)
  expect(output).toEqual(['age']); //assert
});

test.only('getArrayOfKeysAndValues', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = getArrayOfKeysAndValues(dataObject); //act
  console.log(output)
  expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]); //assert
});

test('sortedArraysByValuesLength', () => {
  const dataObject = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' }; //arrange
  const output = sortedArraysByValuesLength(dataObject); //act
  expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]); //assert
});