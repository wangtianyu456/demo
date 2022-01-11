// 从指定的数据源中生成一个长度为 n 的不重复的随机数组

function shuffle(arr, n) {
  let hash = {};
  let result = [];
  let count = 0;
  while (count < n) {
    const random = Math.floor(Math.random() * arr.length);
    if (!hash[random]) {
      hash[random] = true;
      result.push(arr[random]);
      count++;
    }
  }
  return result;
}

function shuffle(arr, n) {
  const hash = {};
  const result = [];
  const count = 0;
  while (count < n) {
    const random = Math.floor(Math.random() * arr.length);
    if (!hash[random]) {
      hash[random] = true;
      result.push(arr[random]);
      count++;
    }
  }
  return result;
}

function shuffle(arr, n) {
  const cloneArr = [...arr];
  const result = [];
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * (cloneArr.length - i));
    result.push(cloneArr[random]);
    [cloneArr[i], cloneArr[random]] = [cloneArr[random], cloneArr[i]];
  }
  return result;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log(shuffle(testArray, 5));
