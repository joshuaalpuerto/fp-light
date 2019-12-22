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
function curry (fns, received = []) {
  return function curried(...args) {
    received = [...received, ...args]
    return received.length >= fns.length ? fns.apply(this, received)  : curry.apply(this, [fns, received]);
  }
}

export default curry