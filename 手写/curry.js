function curry(fn, ...args) {
  return fn.length > args.length
    ? (...args2) => curry(fn, [...args, ...args2])
    : fn(...args);
}

const curry = (fn, ...args) =>
  fn.length > args.length
    ? (...args2) => curry(fn, [...args, ...args2])
    : fn(...args);

const _curry = (fn, ...args) => {
  const length = fn.length;
  const res = (...newArgs) => {
    let finalArgs = [...args, ...newArgs];
    if (finalArgs.length === length) {
      return fn(...finalArgs);
    } else {
      return curry(fn, [...finalArgs]);
    }
  };
  return res;
};

const __curry = (fn, ...args) => {
  const length = fn.length;
  const res = (...args2) => {
    const finalArgs = [...args, ...args2];
    if (finalArgs.length === length) {
      return fn(...finalArgs);
    } else {
      return __curry(fn, ...finalArgs);
    }
  };
};

const ___curry = (fn, ...args) => {
  const length = fn.length;
  const res = (...newArgs) => {
    let finalArgs = [...args, ...newArgs];
    if (finalArgs.length === length) {
      return fn(...finalArgs);
    } else {
      return ___curry(fn, [...finalArgs]);
    }
  };
  return res;
};
