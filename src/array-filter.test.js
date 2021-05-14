import { evensOnly, fiveCharactersOrFewerOnly, ofAge, peopleWhoBelongToTheIlluminati } from './array-filter';

test('Given an array of numbers, return a new array that only includes the even numbers.', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = evensOnly(input); // act
  expect(output).toEqual([6, 8, 2]); // assert
});


	
test('Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
  const output = fiveCharactersOrFewerOnly(input); // act
  console.log(output);
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten']); // assert

});

test(`Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.`, () => {
  const input = [
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true }
  ]; // arrange
  const output = peopleWhoBelongToTheIlluminati(input); // act
  console.log(output);
  expect(output).toEqual([ 
    { name: 'Angelina Jolie', member: true }, 
    { name: 'Paris Hilton', member: true }, 
    { name: 'Bob Ziroll', member: true } 
  ]); // assert

});

test(`Make a filtered list of all the people who are old enough to see The Matrix (older than 18)`, () => {
  const input = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }
  ]; // arrange
  const output = ofAge(input); // act
  console.log(output);
  expect(output).toEqual([ 
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Bob Ziroll', age: 100 } 
  ]); // assert

});







