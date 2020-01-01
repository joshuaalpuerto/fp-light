import ifElse from '../src/ifElse'
import identity from '../src/identity';

describe('triggers correct conditional statement', () => {
  describe('ifElse without arguments', () =>{
    const return10 = ()  =>  10
    const returnNull = ()  =>  null
    const returnValue = ifElse(
      identity,
      return10,
      returnNull
    )
  
    test('should return value', () => {
      const value = returnValue(true)
      expect(value).toEqual(10)
    });
  
    test('negate false value', () => {
      const value = returnValue(false)
      expect(value).toBeNull()
    });
  }) 

  describe('ifElse applying arguments', () =>{
    const add1 = (a)  =>  a + 1
    const minus1 = (a)  =>  a - 1
    const predicate = (val) => val > 5
    const isGreaterThan5 = ifElse(
      predicate,
      add1,
      minus1
    )
  
    test('should return +1 value if argument is greater than 5', () => {
      const value = isGreaterThan5(7)
      expect(value).toEqual(8)
    });
  
    test('should return -1 value if argument is less than 5', () => {
      const value = isGreaterThan5(5)
      expect(value).toEqual(4)
    });

    test('ifElse applying arguments immediately', () =>{
      const add1 = (a)  =>  a + 1
      const minus1 = (a)  =>  a - 1
      const predicate = (val) => val > 5
      const value = 7
      const isGreaterThan5 = ifElse(
        predicate,
        add1,
        minus1,
        value
      )
  
      expect(isGreaterThan5).toEqual(8)
    }) 
  }) 

})