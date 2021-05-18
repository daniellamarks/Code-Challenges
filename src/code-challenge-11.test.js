import { returnTen, findMax, totalSum, grandTotal } from './code-challenge-11';

const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];


test.skip('it should return the last 10 characters of a string as an array', () => {
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

test.skip('it should Return the array of the total number of cookies sold per hour for all of the stores combined', () => {
  expect(grandTotal(cookieStores)).toStrictEqual([88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169]);
});