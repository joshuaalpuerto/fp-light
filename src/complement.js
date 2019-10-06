import not from './not'
/**
 * Returns the negate result of the calling function
 * TODO: work on signature, make this curry function
 * @param {*} predicate 
 * @param {*} trueFn 
 */
const complement = (fn) => (...args) =>
  not(fn(...args))


export default complement