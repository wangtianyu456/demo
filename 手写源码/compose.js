/**
 * 函数组合
 * @param {function} funcs
 */
function compose(funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((prev, cur) => (...args) => prev(cur(...args)));
}
