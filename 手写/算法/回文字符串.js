function isPlalindrome(input) {
  if (typeof input !== "string") return;
  return input.split("").reverse().join("") === input;
}

// 双指针
function isPlalindrome(input) {
  let i = 0;
  let j = input.length - 1;
  while (i < j) {
    if (input[i] !== input[j]) return false;
    i++;
    j--;
  }
  return true;
}
