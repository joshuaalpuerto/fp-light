import curry from "./curry";

/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @example
 *
 *    and(true, true); //=> true
 *    and(true, false); //=> false
 *    and(false, true); //=> false
 *    and(false, false); //=> false
 */
const and = (a, b) => a && b;

export default curry(and);
