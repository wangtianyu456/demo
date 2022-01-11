/* 
 实现一个randomString函数，返回一个数组，
 该数组内有一千个字符串，
 每串字符串为6位数0-9的随机验证码，不可重复。
*/
function randomString() {
  let res = [];
  const map = new Map();
  for (let i = 0; i < 1000; i++) {
    let value = randomUniqueCode();
    while (map.has(value)) {
      value = randomString();
    }
    map.set(value, 1);
    res.push(value);
  }
  return res;
}

const shuffle = (list) => list.sort((x, y) => Math.random() - 0.5);
const randomUniqueCode = () =>
  shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 6);
