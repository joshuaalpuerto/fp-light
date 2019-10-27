import identity from '../src/identity';

test('primitive values should return the same', () => {
  const hello = identity('hello')
  expect(hello).toEqual('hello')
  expect(typeof hello).toEqual('string')
});

test('object values should return the same', () => {
  const object= { a: 1}
  expect(identity(object)).toEqual(object)
  expect(typeof object).toEqual('object')
});