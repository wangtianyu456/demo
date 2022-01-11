function flatten(arr) {
  let result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = [...result, ...flatten(item)]
    } else {
      result = [...result, item]
    }
  })
  return result
}

function _flatten(arr) {
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return [...prev, ..._flatten(cur)]
    } else {
      return [...prev, cur]
    }
  }, [])
}

// 可以控制拍平的层级
const __flatten = (arr, depth = 1) => {
  if (depth === 0) return arr
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...__flatten(cur, depth - 1)]
    } else {
      return [...pre, cur]
    }
  }, [])
}


let arr = [1, 2, [3, 4, [5, 6]]]

console.log(flatten(arr))
