const isValid = (str) => {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === map[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
};
