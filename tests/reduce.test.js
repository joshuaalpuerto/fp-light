import reduce from '../src/reduce'

describe('sum value', () => {
  
  test('Array of 1,2,3 should be equal to 6', () => {
    const sum = (acc, val) => acc += val
    const total = reduce(sum, 0, [1,2,3])
    expect(total).toEqual(6)
  });

  // test('Array of 1,2,3 should be equal to 6 even partially applied', () => {
  //   const withSum = reduce(sum, 0)
  //   console.log(withSum)
  //   const total = withSum([1,2,3])
  //   expect(total).toEqual(6)
  // });
})