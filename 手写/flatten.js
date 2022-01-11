const flatten = (arr, depth = 1) => {
  if (depth > 0) {
    arr.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        return [...prev, ...flatten(cur, depth - 1)];
      } else {
        return [...prev, cur];
      }
    }, []);
  }
  return arr;
};

const _flatten = (arr, depth = 1) => {
  if (depth > 0) {
    arr.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        return [...prev, _flatten(cur, depth - 1)];
      } else {
        return [...prev, cur];
      }
    }, []);
  }
  return arr;
};

const __flatten = (arr, depth = 1) => {
  if (depth > 0) {
    return arr.reduce((memo, curr) => {
      if (Array.isArray(curr)) {
        return [...memo, ...__flatten(curr, depth - 1)];
      } else {
        return [...memo, curr];
      }
    }, []);
  }
  return arr;
};

const ___flatten = (arr, depth = 1) => {
  return arr.reduce((memo, curr) => {
    if (Array.isArray(curr)) {
      return [...memo, ___flatten(curr, depth - 1)];
    } else {
      return [...memo, curr];
    }
  }, []);
};
