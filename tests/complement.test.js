import complement from '../src/complement'

describe('negate function results', () => {
  const fn = (bool) => bool
  test('negate true value', () => {
    const falsy = complement(fn)
    expect(falsy(true)).toBeFalsy()
  });

  test('negate false value', () => {
    const truthy = complement(fn)
    expect(truthy(false)).toBeTruthy()
  });
})