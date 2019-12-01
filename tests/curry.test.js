import curry from '../src/curry';

test('should evaluate correct value', () => {
  const sum = curry((a,b,c) => {
    return a + b + c
  })
  expect(sum(1,2,3)).toEqual(6)
});

test('partial call should apply correct value', () => {
  const sum = curry((a,b,c) => {
    return a + b + c
  })
  expect(sum(1,2)(3)).toEqual(6)
});

