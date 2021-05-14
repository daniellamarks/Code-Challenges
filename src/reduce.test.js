import { toLastNames, addValues, addPurchases, countNumberOfElements } from './reduce.js';

const purchases = [
  { 
    item: 'switch',
    purchasePrice: 400
  },
  {
    item: 'other',
    purchasePrice: 300
  },
  {
    item: 'thing',
    purchasePrice: 200
  }
];

test.skip('it should return the last 10 characters of a string as an array', () => {expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }]).toStrictEqual(['Jane Doe', 'James Bond'])
);
}
);

test('it takes an array as an input and uses reduce to add the values in the array', () => {
  expect(addValues([1, 2, 3, 4, 5])).toStrictEqual(15);
});

test('given an array of objects as input, uses reduce to find the total amount purchased', () => {
  expect(addPurchases(purchases)).toStrictEqual(900);
});

test('uses reduce to count the number of elements in the array', () => {
  expect(countNumberOfElements([1, 2, 3])).toStrictEqual(3);
});