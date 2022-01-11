// 递归实现
let result = [];
function flat(ary) {
  for (let i = 0; i < ary.length; i++) {
    const item = ary[i];
    if (Array.isArray(item)) {
      flat(item);
    } else {
      result.push(item);
    }
  }
}

// reduce
function flatten(ary) {
  return ary.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return [...acc, ...flatten(cur)];
    } else {
      return [...acc, cur];
    }
  }, []);
}

// 扩展运算符
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}
let arr = [1, [2, 3, [4, 5], 6], 7];

console.log(flatten(arr));
