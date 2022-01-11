var obj = {
  a: {
    b: {
      c: 1,
      z: 100,
    },
  },
  e: {
    f: 23,
  },
};

var str = "e.f";

const find = (obj, str) => {
  const keys = str.split(".");
  const value = keys.reduce((memo, curr) => {
    return memo[curr];
  }, obj);
  console.log(value);
};
find(obj, str);

// const a = 2;
// b = a;

// console.log(b.__proto__ === Number.prototype);
// b.__proto__ = {
//   add: () => {},
// };
// console.log(b.add);
// Reflect.setPrototypeOf(b, { add: () => {} });
