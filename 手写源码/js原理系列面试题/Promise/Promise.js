function Promise(executor) {
  let self = this
  self.status = 'pending'
  self.data = undefined
  self.onResolvedCallback = []
  self.onRejectedCallback = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.data = value
      self.onResolvedCallback.forEach(callback => callback(value))
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.data = reason
      self.onRejectedCallback.forEach(callback => callback(reason))
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

// function resolvePromise(){
//
// }

Promise.prototype.then = function (onFulfilled, onRejected) {
  let self = this
  let promise2
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

  if (self.status === 'resolved') {
    // 如果promise1的状态确定为resolved，那么我们直接调用onFulfilled
    return promise2 = new Promise(function (resolve, reject) {
      try {
        let x = onFulfilled(self.data)
        if (x instanceof Promise) {
          // 判断如果当前执行的结果手动返回了一个Promise，那么直接取它的结果作为promise2的结果
          x.then(resolve, reject)
        }
        resolve(x)
      } catch (e) {
        // 如果出错则把捕获到的错误作为promise2的结果
        reject(e)
      }
    })
  }
  if (self.status === 'rejected') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        let x = onRejected(self.reason)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
      } catch (e) {
        reject(e)
      }
    })
  }
  if (self.status === 'pending') {
    return promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallback.push(function (value) {
        try {
          let x = onFulfilled(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })

      self.onRejectedCallback.push(function (reason) {
        try {
          let x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

Promise.all = function (promiseList) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseList)) {
      reject(new TypeError('not promise array'))
    }
    let count = 0
    let len = promiseList.length
    let result = new Array(len)
    promiseList.forEach(promise => {
      promise.then(value => {
        count++
        result[i] = value
        if (count === len) {
          resolve(result)
        }
      }, e => reject(e))
    })
  })
}
