const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

function resolvePromise(x, promise2, resolve, reject) {
  let called;
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(x, promise2, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (value instanceof Promise) {
        return value.then(resolve, reject);
      }
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach((callback) => callback());
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback());
      }
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onfulfilled, onrejected) {
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onfulfilled(this.value);
              resolvePromise(x, promise2, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onrejected(this.reason);
              resolvePromise(x, promise2, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onfulfilled(this.value);
            resolvePromise(x, promise2, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onrejected(this.reason);
            resolvePromise(x, promise2, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
    });
    return promise2;
  }

  static resolve(data) {
    return new Promise((resolve) => {
      resolve(data);
    });
  }
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }
  catch(errCallback) {
    return this.then(null, errCallback);
  }

  finally(callback) {
    return this.then(
      (value) => {
        return Promise.resolve(callback()).then(() => value);
      },
      (reason) => {
        return Promise.resolve(callback()).then(() => {
          throw reason;
        });
      }
    );
  }

  static all(promises) {
    if (!Array.isArray(promises)) {
      throw new Error("not array");
    }
    return new Promise((resolve, reject) => {
      let len = promises.length;
      let result = new Array(len);
      let count = 0;
      for (let i = 0; i < len; i++) {
        let cur = promise[i];
        Promise.resolve(cur).then(
          (res) => {
            result[i] = res;
            count++;
            if (count === len) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promise.length; i++) {
        Promise.resolve(promises[i]).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static any(promises) {
    return new Promise((resolve, reject) => {
      const len = promises.length;
      let count = 0;
      let errs = [];
      for (let i = 0; i < len; i++) {
        Promise.resolve(promises[i]).then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            errs[i] = reason;
            count++;
            if (count === len) {
              reject(errs);
            }
          }
        );
      }
    });
  }
  static allSettled(promises) {
    if (promises.length === 0) return Promise.resolve([]);
    return new Promise((resolve) => {
      let len = promises.length;
      let result = [];
      let count = 0;
      Promise.resolve(promises[i]).then(
        (value) => {
          result[i] = {
            status: "fulfilled",
            value: value,
          };
          count++;
          if (count === len) {
            resolve(result);
          }
        },
        (reason) => {
          result[i] = {
            status: "rejected",
            reason: reason,
          };
          if (count === len) {
            resolve(result);
          }
        }
      );
    });
  }
}
