// 测试用例
// 输入
// const a = { foo: { bar: 0 }, arr: [1, 3, { a: { b: 1 } }] };
// const b = { foo: { bar: 1 }, arr: [1, 2, { b: { a: 1 } }] };
// 输出，新对象不影响源对象
// {foo:{bar:1},arr:[1,2,{a:{b:1},b:{a:1}}]}

const a = { foo: { bar: 0 }, arr: [1, 3, { a: { b: 1 } }] };
const b = { foo: { bar: 1 }, arr: [1, 2, { b: { a: 1 } }] };

function merge(a, b) {
  const isObject = (value) =>
    typeof value !== "null" && typeof value === "object";
  if (!isObject(a) || !isObject(b)) {
    return a === undefined ? b : a;
  }
  return Object.keys({
    ...a,
    ...b,
  }).reduce(
    (memo, key) => {
      memo[key] = merge(a[key], b[key]);
      return memo;
    },
    Array.isArray(a) ? [] : {}
  );
}
console.log(JSON.stringify(merge(a, b)));
