function myInstanceof(left, right) {
  // 基本数据类型直接返回false
  if (typeof left !== "object" && left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) {
      return false;
    }
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

function _myInstanceof(l, r) {
  if (typeof l !== "object" || left === null) return false;
  let proto = Reflect.getPrototypeOf(l);
  while (true) {
    if (proto == null) {
      return false;
    }
    if (proto === right.prototype) return true;
    proto = Reflect.getPrototypeOf(proto);
  }
}
