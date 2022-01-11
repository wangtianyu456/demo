function debounce(fn, wait) {
  // 只要触发就重置定时器
  let timeout
  return function () {
    clearTimeout(timeout)
    const context = this
    const args = arguments
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}


function throttle(fn, wait) {
  let timeout
  return function () {
    if (!timeout) {
      const context = this
      const args = arguments
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(context, args)
      }, wait)
    }
  }
}

// 防抖，只要再次触发就重置定时器
function debounce1(fn, wait) {
  let timer
  return function () {
    clearTimeout(timer)
    const context = this
    const args = [...arguments]
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait);
  }
}

function debounce2(fn, wait) {
  let timer
  return function () {
    clearTimeout(timer)
    const context = this
    const args = arguments
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

// 固定间隔触发
function throttle(fn, wait) {
  let timeout
  return function () {
    if (!timeout) {
      const context = this
      const args = arguments
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(context, args)
      }, wait)
    }
  }
}

function debounce(fn, wait) {
  let timer = null
  return function () {
    clearTimeout(timer)
    const context = this
    const args = [...arguments]
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

function throttle(fn, wait) {
  let timer = null
  return function () {
    if (!timer) {
      const context = this
      const args = [...arguments]
      timer = setTimeout(() => {
        timer = null
        fn.apply(contexy, args)
      }, wait)
    }

  }
}
