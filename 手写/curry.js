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

const curry111 = (fn) => {
  const length = fn.length;
  return function curried(...args) {
    console.log(args);
    if (args.length === length) {
      return fn.apply(this, [...args]);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
};

const sum = (a, b, c) => {
  return a + b + c;
};
const curried = curry111(sum);
console.log(curried(1)(2)(3));
