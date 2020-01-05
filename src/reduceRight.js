import curry from './curry'
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 * 
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 * 
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 **/
// TODO: need to put this inside the curry function but we are running issue with closure.
const reduceRight = (fn, acc, list) => list.reduceRight(fn, acc)

export default curry(reduceRight)