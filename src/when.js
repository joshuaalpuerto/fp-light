/**
 * Returns function that if predicate is evaluated true  
 * then will return the whenTrueFn given the same arguments otherwise will just return the arguments as is.
 * TODO: work on signature, make this curry function
 * @param {*} predicate 
 * @param {*} trueFn 
 */
const when = (predicate, trueFn) => (...args) =>
  predicate(...args) ? trueFn(...args) : args


export default when