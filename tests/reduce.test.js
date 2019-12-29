import reduce from '../src/reduce'

describe('sum value', () => {
  const sum = (acc, val) => acc += val
  
  test('Array of 1,2,3 should be equal to 6', () => {
    const total = reduce(sum, 0, [1,2,3])
    expect(total).toEqual(6)
  });

  test('Array of 1,2,3 should be equal to 6 even partially applied', () => {
    const withSum = reduce(sum, 0)
    const total = withSum([1,2,3])
    expect(total).toEqual(6)
  });
})