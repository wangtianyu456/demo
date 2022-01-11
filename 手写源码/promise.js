const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(fn) {
  // 缓存当前Promise实例
  let self = this

  self.value = null
  self.error = null
  self.status = PENDING
  self.onFulfilledCallbacks = []
  self.onRejectedCallbacks = []

  function resolve(value) {
    // 用setTimeout来实现将执行放到then绑定完回调之后
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = FULFILLED
        self.value = value
        self.onFulfilled.forEach(callback => callback(self.value))
      }, 0)
    }
  }

  function reject(error) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = REJECTED
        self.error = error
        self.onRejected.forEach(callback => callback(self.error))
      }, 0)
    }
  }

  fn(resolve, reject)
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  if (this.status === PENDING) {
    this.onFulfilledCallbacks.push(onFulfilled)
    this.onRejectedCallbacks.push(onRejected)
  } else if (this.status === FULFILLED) {
    onFulfilled(this.value)
  } else {
    onRejected(this.error)
  }
  return this
}

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(promises)) {
      return reject(new TypeError('not array'))
    }
    let count = 0
    let promiseNums = promises.length
    let results = new Array(promiseNums)
    for (let i = 0; i < promiseNums; i++) {
      promises[i].then(value => {
        count++
        results[i] = value
        if (count === promiseNums) {
          return resolve(results)
        }
      }, error => reject(error))
    }
  })
}

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(value => resolve(data), error => reject(error))
    }
  })
}

export default Promise
