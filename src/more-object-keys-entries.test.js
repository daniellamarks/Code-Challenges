import { getHouses, updateNumbers, totalCharacters, hasChildrenEntries, sortByChildren } from './more-object-keys-entries.js';

const characters = [
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

test('it gets the names of the houses', () => {
  ; //arrange
  const output = getHouses(characters); //act
  expect(output).toEqual(expect.arrayContaining(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark'])); //assert
});

test.only('it returns an array of transformed key value pairs into strings', () => {
  const input = {
    'Grace Hopper': '222-303-5938', 
    'Ada Lovelace': '222-349-9842', 
    'Alan Turing': '222-853-5933'
  }; //arrange
  const output = updateNumbers(input); //act
  console.log(output);
  expect(output).toEqual(expect.arrayContaining(['Grace Hopper: 222-303-5938', 'Ada Lovelace: 222-349-9842', 'Alan Turing: 222-853-5933'])); //assert
});

test('Given an array of characters, your function will return the total number of characters in the data array. Hint you need to count the spouse, the children and the character for the total.', () => {
  const input = characters; //arrange
  const output = totalCharacters(input); //act
  console.log(output);
  expect(output).toEqual(26); //assert
});

test('Given an array of characters, your function will return the total number of characters in the data array. Hint you need to count the spouse, the children and the character for the total.', () => {
  const output1 = hasChildrenEntries(characters, 'Eddard'); 
  const output2 = hasChildrenEntries(characters, 'Euron');//act
  expect(output1).toEqual(true); 
  expect(output2).toEqual(false);//assert
});


test('You will have an array of objects which you will sort through. The houses are sorted by amount of children (and if needed also alphabetically)', () => {
  const input = characters; //arrange
  const output = sortByChildren(input); //act
  console.log(output);
  expect(output).toEqual([{ name: 'Euron', spouse: null, children: [], house: 'Greyjoy' }, { name: 'Jon S.', spouse: null, children: [], house: 'Snow' }, { name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn' }, { name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell' }, { name: 'Cersei', spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister' }, { name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen' }, { name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark' }]); //assert
});
  