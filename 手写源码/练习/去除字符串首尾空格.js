let str = '  abc '
function trim(str) {
  return str.replace(/^\s+|\s+$/g, '')
}
console.log(str)
console.log(trim(str))

