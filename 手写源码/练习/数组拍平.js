// const flatten = (arr, depth) => {
//   if (depth === 0) return
//   return arr.reduce((prev, cur) => {
//     if (Array.isArray(cur)) {
//       return [...prev, ...flatten(cur, depth - 1)]
//     } else {
//       return [...prev, cur]
//     }
//   }, [])
// }

const flatten = (arr, depth) => {
  if (depth === 0) return arr;
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return [...prev, ...flatten(cur, depth - 1)];
    } else {
      return [...prev, cur];
    }
  }, []);
};

const flatten = (arr, depth) => {
  if (depth === 0) return arr;
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return [...prev, ...flatten(cur, depth - 1)];
    } else {
      return [...prev, cur];
    }
  }, []);
};
const flatten = (arr, depth) => {
  if (depth === 0) return arr;
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return [...prev, ...flatten(cur, depth - 1)];
    } else {
      return [...prev, cur];
    }
  }, []);
};

const flatten = (arr, depth) => {
  if (depth === 0) return arr;
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return [...prev, ...flatten(cur, depth - 1)];
    } else {
      return [...prev, cur];
    }
  }, []);
};
