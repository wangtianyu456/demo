function create(con, ...args) {
  let obj = {};
  obj.__proto__ = con.prototype;
  let result = con.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function _create(constructor, ...args) {
  const obj = Object.create(null);
  obj.__proto__ = constructor.prototype;
  let ret = constructor.call(obj, ...args);
  return typeof ret === "object" ? ret : obj;
}

function __create(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  const result = constructor.apply(obj, [...args]);
  return typeof result === "object" ? result : obj;
}

function ___create(constructor, ...args) {
  const instance = Object.create(constructor.prototype);
  const result = constructor.apply(instance, [...args]);
  return typeof result === "object" ? result : instance;
}

const create = (con, ...args) => {
  const instance = Object.create(con.prototype);
  const result = con.apply(instance, [...args]);
  return typeof result === "object" ? result : instance;
};
