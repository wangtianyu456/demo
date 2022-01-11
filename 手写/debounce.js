function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 防抖函数，支持立即执行
function debounce2(fn, wait, immediate) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    if (immediate && !timer) {
      fn.apply(context, args);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

function debounce3(fn, wait, immediate) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    if (immediate && !timer) {
      fn.apply(context, args);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

function debounce4(fn, wait, immediate) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    if (!timer && immediate) {
      fn.apply(context, args);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 完整版 支持立即执行 有返回值
function debounce5(fn, wait, immediate) {
  let timer = null;
  let result;

  const debounced = function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    if (!timer && immediate) {
      result = fn.apply(context, args);
    }
    timer = setTimeout(() => {
      result = fn.apply(context, ...args);
    }, wait);
    return result;
  };
  return debounced;
}

function debounce6(fn, wait, immediate) {
  let timer, result;
  const debounced = function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    if (!timer && immediate) {
      result = fn.apply(context, ...args);
    }
    timer = setTimeout(() => {
      result = fn.apply(context, ...args);
    }, wait);
    return result;
  };
  return debounced;
}

const debounce = (fn, wait, immediate) => {
  let timer;
  let result;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    if (!timer && immediate) {
      result = fn.apply(context, args);
    }
    timer = setTimeout(() => {
      result = fn.apply(contex, args);
    }, wait);

    return result;
  };
};

const debounce = (func, wait, immediate) => {
  let timeout;
  let result;

  const debounced = function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    if (!timeout && immediate) {
      result = func.apply(contex, args);
    } else {
      timeout = setTimeout(() => {
        result = func.apply(context, args);
      }, wait);
    }
    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};
