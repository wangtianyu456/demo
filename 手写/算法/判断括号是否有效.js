const isValid = (s) => {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (map[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return !stack.length;
};
