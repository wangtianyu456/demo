var lengthOfLongestSubstring = function (s) {
  const arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const curIndex = arr.findIndex(s[i]);
    if (curIndex >= 0) {
      arr.splice(0, curIndex + 1);
    }
    arr.push(s[i]);
    max = Math.max(arr.length, max);
  }
  return max;
};
var lengthOfLongestSubstring = function (s) {
  const arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const curIndex = arr.findIndex(s[i]);
    if (curIndex >= 0) {
      arr.splice(0, curIndex + 1);
    }
    arr.push(s[i]);
    max = Math.max(arr.length, max);
  }
  return max;
};

const lengthOfLongestSubstring = (s) => {
  let arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const curIndex = arr.findIndex(s[i]);
    if (curIndex >= 0) {
      arr.splice(0, curIndex + 1);
    }
    arr.push(s[i]);
    max = Math.max(max, arr.length);
  }
  return max;
};

const lengthOfLongestSubstring = (s) => {
  const arr = [];
  let max = 0;
  for (const char of s) {
    const index = arr.indexOf(char);
    if (index >= 0) {
      arr.splice(0, index + 1);
    }
    arr.push(char);
    max = Math.max(max, arr.length);
  }
  return max;
};
