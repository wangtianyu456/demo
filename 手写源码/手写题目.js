/**
 * 防抖函数
 * 多次触发 只触发最后一次
 * 场景：输入框中输入值并向服务端发送请求，这样就等用户最后一次输入再去查询
 */
const debounce = (fn, wait) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, ...args);
    }, wait);
  };
};

/**
 * 节流
 * 不停的触发操作，但是每隔相同的时间触发一次
 * 场景：监控浏览器的 resize 事件，短时间内只触发一次，节省性能
 */
const throttle = (fn, wait) => {
  let timeout;
  return (...arg) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        fn.apply(this, ...arg);
      }, wait);
    }
  };
};

/**
 * 深克隆
 */
const deepClone = (obj, hash = new WeakMap()) => {
  if (obj === null) return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (typeof obj !== "object") return obj;
  if (hash.has(obj)) return has.get(obj);
  const copy = new obj.constructor();
  hash.set(obj, copy);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key], hash);
    }
  }
  return copy;
};

function myInstanceOf(L, R) {
  let O = R.prototype;
  L = L.__proto__;

  while (true) {
    if (L == null) return false;
    if (L === O) {
      return true;
    }
    L = L.__proto__;
  }
}

function create(con) {
  const obj = new Object();
  const arg = [...arguments].slice(1);
  obj.__proto__ = con.prototype;
  const ret = con.call(obj, ...arg);
  return typeof ret === "object" ? ret : obj;
}

function myCall(context) {
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

function myBind(context) {
  if (typeof this !== "function") {
    throw new TypeError("not a function ");
  }
  context = context || window;
  context.fn = this;
  const args = arguments[1];
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

function myBind(context) {
  if (typeof this !== "function") {
    throw new TypeError("not a function ");
  }
  let _this = this;
  const args = [...arguments].slice(1);
  const F = function () {};
  const bound = function () {
    let finalArgs = [...args, ...arguments];
    return _this.apply(this instanceof F ? this : context, finalArgs);
  };
  bound.prototype = new F();
  return bound;
}
