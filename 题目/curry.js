function curry(fn) {
  const inner = (args = []) => {
    return args.length >= fn.length
      ? fn(...args)
      : (...userArgs) => inner([...args, ...userArgs]);
  };
}
