const compose = (...fn) =>
  fn.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );

const compose = (...fn) =>
  fn.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
