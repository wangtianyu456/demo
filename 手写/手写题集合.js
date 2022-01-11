// 1 compose
const compose = (...fns) => {
  return fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
};
