// function deepClone(obj, hash = new WeakMap()) {
//   if (typeof obj == null) return obj;
//   if (typeof obj !== "object") return obj;
//   if (obj instanceof Date) return new Date(obj);
//   if (obj instanceof RegExp) return new RegExp(obj);

//   // 在hash中判断一下，如果是已经存在的同一个对象，则返回这个对象，防止循环引用
//   if (hash.has(obj)) return hash.get(obj);

//   // 无论是 数组 还是 对象 通过 new 它的 constructor 都可以得到一个新的值
//   // 如果是数组 则 newObj = []
//   // 如果是对象 则 newObj = {}
//   // 不需要单独判断 是数组还是 对象
//   let newObj = new obj.constructor();
//   hash.set(obj, newObj);
//   for (let key in obj) {
//     // 深克隆内部的引用类型
//     newObj[key] = deepClone(obj[key], hash);
//   }
//   return newObj;
// }

function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj !== "object") return obj;
  if (typeof obj == null) return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);

  // 主要是为了解决循环引用的问题，如果后续在访问的时候已经存在了，就直接返回
  if (hash.has(obj)) return hash.get(obj);

  const copy = new obj.constructor();
  // 先在 hash 中存一份
  hash.set(obj, copy);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key], hash);
    }
  }

  return copy;
}
