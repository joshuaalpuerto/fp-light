import when from '../src/when';
import identity from '../src/identity';

describe('triggers condition when predicate is true', () => {
  describe('when without arguments', () =>{
    const return10 = ()  =>  10
    const returnValue = when(
      identity,
      return10,
    )
  
    test('should return value', () => {
      const value = returnValue(true)
      expect(value).toEqual(10)
    });
  
    test('should return the arguments when not evaluated', () => {
      const value = returnValue(false)
      expect(value).toBeFalsy()
    });
  }) 

  describe('when applying arguments', () =>{
    const add1 = (a)  =>  a + 1
    const predicate = (val) => val > 5
    const whenGreaterThan5 = when(
      predicate,
      add1
    )
  
    test('should return +1 value if argument is greater than 5', () => {
      const value = whenGreaterThan5(7)
      expect(value).toEqual(8)
    });
  
    test('should return the same value if argument is less than 5', () => {
      const value = whenGreaterThan5(5)
      expect(value).toEqual(5)
    });
  }) 
 
})