function curry(fn) {
  return function judgeCurry(...arg) {
    return fn.length > arg.length
      ? (...arg1) => judgeCurry(...arg, ...arg1)
      : fn(...arg);
  };
}
