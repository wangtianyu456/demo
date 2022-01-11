/*
const PENDING = "pending";
const ONFULFILLED = "onFulfilled";
const ONREJECTED = "onRejected";

function Promise(fn) {
  const self = this;
  self.status = PENDING;
  self.value = undefined;
  self.reason = undefined;
  self.onFulfilledCallbacks = [];
  self.onRejectedCallbacks = [];
  function resolve(value) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = ONFULFILLED;
        self.value = value;
        self.onFulfilledCallbacks.forEach(callback => callback(self.value));
      }, 0);
    }
  }

  function reject(reason) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = ONREJECTED;
        self.reason = reason;
        self.onRejectedCallbacks.forEach(callback => callback(self.reason));
      }, 0);
    }
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  let self = this;
  if (self.status === PENDING) {
    self.onFulfilledCallbacks.push(onFulfilled);
    self.onRejectedCallbacks.push(onRejected);
  } else if (self.status === ONFULFILLED) {
    onFulfilled(self.value);
  } else {
    onRejected(self.reason);
  }
};
*/

const PENDING = 'pending'
const ONRESOLVED = 'resolved'
const ONREJECTED = 'rejected'

function Promise(executor) {
  const self = this
  self.status = PENDING
  self.value = undefined
  self.reason = undefined
  self.resolvedCallbacks = []
  self.rejectedCallbacks = []

  function resolve(value) {
    if (self.status === PENDING) {
      self.status = ONRESOLVED
      self.value = value
      self.resolvedCallbacks.forEach(callback => callback(self.value))
    }
  }

  function reject(reason) {
    if (self.status === PENDING) {
      self.status = ONREJECTED
      self.reason = reason
      self.rejectedCallbacks.forEach(callback => callback(self.reason))
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  const self = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => {
    throw r
  }

  if (self.status === PENDING) {
    self.resolvedCallbacks.push(onFulfilled)
    self.rejectedCallbacks.push(onRejected)
  }
  if (self.status === ONRESOLVED) {
    onFulfilled(self.value)
  }
  if (self.status === ONREJECTED) {
    onRejected(self.reason)
  }
}

Promise.prototype.finally = function (callback) {
  callback = typeof callback === 'function' ? callback : () => { }
  const P = this.constructor
  const onFulfilled = (data) => {
    return P.resolve(callback).then(() => data)
  }
  const onRejected = reason => P.resolve(callback).then(() => {
    throw reason
  })
  return this.then(onFulfilled, onRejected)
}

Promise.all = function (promiseList) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseList)) {
      return reject(new TypeError('arguments not array'))
    }
    let countNum = 0
    let promiseNum = promiseList.length
    let resolvedValues = new Array(promiseNum)
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promiseList[i]).then((value) => {
        countNum++
        resolvedValues[i] = value
        if (countNum === promiseNum) {
          return resolve(resolvedValues)
        }
      }, (reason) => {
        return reject(reason)
      })
    }
  })
}

Promise.race = function (promiseList) {
  return new Promise((resolve, reject) => {
    promiseList.forEach(promise => {
      Promise.resolve(promise).then(resolve, reject)
    })
  })
}
