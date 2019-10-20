import not from '../src/not'

test('negate truthy values', () => {
  const falsy = not(true)
  expect(falsy).toBeFalsy()
});