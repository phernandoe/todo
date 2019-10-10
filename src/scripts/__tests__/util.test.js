const parseInput = require('../util');

//Run npm run test

test('parseInput with 3 arguments', () => {
  expect(parseInput('add todo -o')).toEqual( ['add', 'todo -o'] );
});

test('parseInput with 3 arguments', () => {
  expect(parseInput('add make food')).toEqual( ['add', 'make food'] );
});

test('parseInput 2 with arguments', () => {
  expect(parseInput('add todo')).toEqual( ['add', 'todo'] );
});

test('parseInput 1 with argument', () => {
  expect(parseInput('add')).toEqual( ['add'] );
});

test('parseInput with no arguments', () => {
  expect(parseInput()).toEqual( [] );
});

test('parseInput with extra space', () => {
  expect(parseInput('   add  todo    -o   ')).toEqual( ['add', 'todo -o'] );
});

//Check for commands

//TODO: Check for flags
