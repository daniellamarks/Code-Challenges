import { returnTen, findMax } from './code-challenge-11';

test('it should return the last 10 characters of a string as an array', () => {
  expect(returnTen('hello world')).toStrictEqual(['e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
  expect(returnTen('world')).toStrictEqual(['w', 'o', 'r', 'l', 'd']);
});

test(`takes in a matrix of positive numbers and returns the number with the highest value`, () => {
  const expected = [[1, 3, 4, 5], [4, 5, 6], [23, 5, 5]];
  expect(findMax(expected)).toStrictEqual(23);
});

