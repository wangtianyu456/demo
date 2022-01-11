function throttle(fn, wait) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };
}

function throttle(fn, wait, immediate) {
  let timer = null;
  let result;
  return function (...args) {
    const context = this;
    if (timer) return;
    if (!timer && immediate) {
      result = fn.apply(context, ...args);
    }
    timer = setTimeout(() => {
      result = fn.apply(context, ...args);
    }, wait);
    return result;
  };
}

const throttle = (fn, wait, immediate) => {
  let timer;
  let result;
  const func = function (...args) {
    const context = this;
    if (timer) return;
    if (!timer && immediate) {
      result = fn.apply(context, args);
    } else {
      timer = setTimeout(() => {
        result = fn.apply(context, args);
      }, wait);
    }
    return result;
  };
  return func;
};
