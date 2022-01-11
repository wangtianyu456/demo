// 可以控制层级
const flat = function(depth = 1) {
  let arr = Array.prototype.slice.call(this);
  if (depth === 0) return arr;
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...flat.call(cur, depth - 1)];
    } else {
      return [...pre, cur];
    }
  }, []);
};

// 直接递归全部扁平化
const flat2 = function() {
  let arr = Array.prototype.slice.call(this);
  //   if (depth === 0) return arr;
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      console.log(cur);
      return [...pre, ...flat2.call(cur)];
    } else {
      return [...pre, cur];
    }
  }, []);
};
Array.prototype.flat = flat;
Array.prototype.flat2 = flat2;
// let ary = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// console.log(ary.flat());
let ary = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(ary.flat2());
