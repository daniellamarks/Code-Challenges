import { sortByChildren, containsW, isNum } from './code-challenge-13.js';

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

describe.skip('Testing challenge 1', () => {
  test('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('use a regular expression pattern to return true if the string contains the letter "w" in lower case or false if it does not.', () => {
    expect(containsW('hello world')).toStrictEqual(true);
    expect(containsW('Hello World')).toStrictEqual(false);
    expect(containsW('hello everyone')).toStrictEqual(false);
  });
});

describe('Testing challenge 2', () => {
  test(' use a regular expression pattern to return true if the input contains a number, and false if the input does not contain a number.', () => {
    expect(isNum(1234567890)).toStrictEqual(true);
    expect(isNum('12345')).toStrictEqual(true);
    expect(isNum('h3llo w0rld')).toStrictEqual(true);
    expect(isNum('hello world')).toStrictEqual(false);
  });
});