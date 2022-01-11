function curry(fn, args) {
  let length = fn.length;
  args = args || [];
  return function () {
    let finalArgs = [...args, ...arguments];
    if (finalArgs.length < length) {
      return curry.call(this, fn, finalArgs);
    } else {
      return fn.apply(this, finalArgs);
    }
  };
}
function multiFn(a, b, c) {
  return a + b + c;
}
const multi = curry(multiFn);
multi(1)(2)(3);

function curry(fn, ...args) {
  let length = fn.length
  args = args || []
  return function () {
    let finalArgs = [...args, ...arguments]
    if (finalArgs.length < length) {
      return curry.call(this, fn, finalArgs)
    } else {
      return fn.apply(this, ...finalArgs)
    }
  }
}

function curry(fn, ...args) {
  let length = fn.length
  args = args || []
  return function () {
    let finalArgs = [...args, ...arguments]
    if (finalArgs.length < length) {
      return curry.call(this, fn, finalArgs)
    } else {
      return fn.apply(this, ...finalArgs)
    }
  }
}

function curry(fn, ...args) {
  const length = fn.length
  args = args || []
  return function () {
    let finalArgs = [...args, ...arguments]
    if (finalArgs.length < length) {
      return curry.call(this, fn, finalArgs)
    } else {
      return fn.apply(this, ...finalArgs)
    }
  }
}
