/**
 * 大数相加
 *
 * let a = "9007199254740991";
 * let b = "1234567899999999999";
 *
 * @param {string} a
 * @param {string} b
 *
 */
const add = (a, b) => {
  // 1、找出长度最大的数
  const maxLength = Math.max(a, b);
  // 2、对长度不足最大长度的在前边进行补0
  // "0009007199254740991"
  // "1234567899999999999"
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");
  // 3、从后开始进行运算
  let t = 0; // 当前位执行加法得到的结果
  let f = 0; // 需要进位吗？
  let sum = ""; // 总和
  for (let i = maxLength - 1; i >= 0; i--) {
    // 计算当前位的和，如果有进位要加上
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    // 计算当前位的和是否会产生进位
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }

  // 4、如果全部计算完毕还有进位
  if (f === 1) {
    sum = "1" + sum;
  }
  return sum;
};

const add = (a, b) => {
  const maxLength = Math.max(a, b);
  a.padStart(maxLength, "0");
  b.padStart(maxLength, "0");

  let t = 0; // 当前位执行加法的结果
  let f = 0; // 需要进位
  let sum = ""; // 总和
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    sum = (t % 10) + sum;
  }
  if (f === 1) {
    sum = "1" + sum;
  }
  return sum;
};
