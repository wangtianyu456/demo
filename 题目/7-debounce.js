// 第一版
// 在事件触发n秒后执行
function debounce(func, wait) {
  let timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  }
}

// 第二版
// 如果func中有this，在不做防抖处理时，this是正常的，但是一旦经过防抖处理后，this就变成了全局window，所以我们要将this指向正确的对象
function _debounce(func, wait) {
  let timeout
  return function () {
    let context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context)
    }, wait)
  }
}

// 第三版
// 如果func中有event等参数，经过处理后会变成undefined
function __debounce(func, wait) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}
