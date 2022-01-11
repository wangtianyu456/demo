function bubbleSort(arr) {
  let newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - i; j++) {
      if (newArr[j] < newArr[j + 1]) {
        const temp = newArr[j]
        newArr[j] = newArr[j + 1]
        newArr[j + 1] = temp
      }
    }
  }
  return newArr
}

// 优化版本
function bubbleSort2(arr) {
  let newArr = [...arr]
  let i = arr.length - 1
  while (i > 0) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    i = pos
  }
}


function bubbleSort2(arr) {
  // let newArr = [...arr]
  let i = arr.length - 1
  while (i > 0) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    i = pos
  }
}

function bubbleSort2(arr) {
  let newArr = [...arr]
  let i = newArr.length - 1
  while (i > 0) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        pos = j
        const temp = newArr[j]
        newArr[j] = newArr[j + 1]
        newArr[j + 1] = temp
      }
    }
    i = pos
  }
  return newArr
}
