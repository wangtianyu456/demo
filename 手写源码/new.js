function objectFactory() {
  let obj = {},
    Constructor = [...arguments].shift();
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}

function New(func) {
  let obj = {};
  if (func.prototype !== null) {
    obj.__proto__ = func.prototype;
  }
  let ret = func.apply(obj, [...arguments].slice(1));
  // 判断new执行的constructor是否返回引用数据类型，如果返回了引用类型，就直接返回
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  }
  return obj;
}

function create(con, ...args) {
  let obj = {}
  obj.__proto__ = con.prototype
  let result = con.apply(obj, args)
  return result instanceof Object ? result : obj
}


function objectCreate() {
  let obj = {}
  let Constructor = [...arguments].shift()
  obj.__proto__ = Constructor.prototype
  let result = Constructor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}

function objectCreate() {
  let obj = {},
    Constructor = [...arguments].shift()
  obj.__proto__ = Constructor.prototype
  let result = Constructor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}
