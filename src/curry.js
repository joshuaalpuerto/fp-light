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
  let args = []
  return function curried(...arg) {
    args = [...args, ...arg]
    return args.length === fns.length ? fns(...args)  : curried;
  }
}

export default curry