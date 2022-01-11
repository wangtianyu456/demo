var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  return strs.reduce(getSameStr, strs[0]);
};

function getSameStr(a, b) {
  let res = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      res += a[i];
    } else {
      return res;
    }
  }
  return res;
}

const longestCommonPrefix = (strs) => {
  if (strs === null || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  const getSameStr = (a, b) => {
    let res = "";
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        res += a[i];
      } else {
        return res;
      }
    }
    return res;
  };
  return strs.reduce(getSameStr, strs[0]);
};

const longestCommonPrefix = (strs) => {
  if (strs === null || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  const getSameStr = (a, b) => {
    let res = "";
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        res += a[i];
      } else {
        return res;
      }
    }
    return res;
  };
  return strs.reduce(getSameStr, strs[0]);
};
