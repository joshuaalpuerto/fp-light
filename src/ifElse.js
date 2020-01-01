import curry from './curry'
/**
 * Returns function that if predicate is evaluate correctly 
 * will evaluate the true statement else evaluate the false.
 * TODO: work on signature, make this curry function
 * @param {*} predicate 
 * @param {*} truthy 
 * @param {*} falsy 
 */
const ifElse = (predicate, truthy, falsy, args) =>
  predicate(args) ? truthy(args) : falsy(args)


export default curry(ifElse)