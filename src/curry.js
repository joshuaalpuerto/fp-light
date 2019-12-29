/**
 * Returns a curried equivalent of the provided function. First, its arguments needn't be provided one
 * at a time. the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *   - `g()()(1, 2, 3)`
 */
function curry (fns) {
  return function curried(...args) {
    return args.length >= fns.length ? fns.apply(this, args)  : curried.bind(null, ...args);
  }
}

export default curry