import not from '../src/not'

describe('negate values', () => {
  test('negate true value', () => {
    const falsy = not(true)
    expect(falsy).toBeFalsy()
  });

  test('negate false value', () => {
    const truthy = not(false)
    expect(truthy).toBeTruthy()
  });
})