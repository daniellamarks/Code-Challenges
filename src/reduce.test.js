import { toLastNames, addValues } from './reduce.js';

test.skip('it should return the last 10 characters of a string as an array', () => {expect(toLastNames([{ firstName:"Jane", lastName:"Doe" }, {firstName:"James", lastName:"Bond"}]).toStrictEqual(["Jane Doe", "James Bond"])
    )
  }
);


test('it takes an array as an input and uses reduce to add the values in the array', () => {
  expect(addValues([1, 2, 3, 4, 5])).toStrictEqual(15);
});