var firstUniqChar = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  for (let j = 0; j < s.length; j++) {
    const char = s[j];
    if (map[char] === 1) return j;
  }
  return -1;
};
