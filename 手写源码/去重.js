// indexOf
function _unique(array) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (res.indexOf(item) === -1) {
      res.push(item)
    }
  }
  return res
}

// 对象键值对去重
function __unique(array) {
  let obj = {}
  return array.filter(item => {
    return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : obj[typeof item + JSON.stringify(item)] = true
  })
}

let arr = [1, '1', 1, 1, 2, 2, 2, 2, 23, 3, 3, 3, 4, 5, 3, 31, 2, 3, 12]
console.log(__unique(arr))
