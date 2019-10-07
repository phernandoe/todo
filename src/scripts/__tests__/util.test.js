const parseInput = require('../util');

test('parseInput with 3 arguments', () => {
  expect(parseInput('add todo -o')).toEqual( ['add', 'todo', '-o'] );
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

//TODO: Add test to get rid of whitespace
