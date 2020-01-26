import curry from "./curry";

/**
* Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @param {Any} a
 * @param {Any} b
  @return {Any} the first argument if truthy, otherwise the second argument.
 * @example
 *
 *    or(true, true); //=> true
 *    or(true, false); //=> true
 *    or(false, true); //=> true
 *    or(false, false); //=> false
 */
const or = (a, b) => a || b;

export default curry(or);
