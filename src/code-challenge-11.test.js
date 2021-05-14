import { returnTen, findMax, totalSum } from './code-challenge-11';

test('it should return the last 10 characters of a string as an array', () => {
  expect(returnTen('hello world')).toStrictEqual(['e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
  expect(returnTen('world')).toStrictEqual(['w', 'o', 'r', 'l', 'd']);
});

test(`takes in a matrix of positive numbers and returns the number with the highest value`, () => {
  const expected = [[13, 24, 24, 2], [2, 5, 6], [2, 3]]	;
  expect(findMax(expected)).toStrictEqual(24);
});

test(`takes in a matrix of numbers and returns the totalSum of all the numbers`, () => {
  const expected = [[13, 24, 24, 2], [2, 5, 6], [2, 3]];
  const expected2 = [];	
  expect(totalSum(expected)).toStrictEqual(81);
  expect(totalSum(expected2)).toStrictEqual(0);
});