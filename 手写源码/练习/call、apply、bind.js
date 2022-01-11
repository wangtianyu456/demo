function myCall(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

function myApply(context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  context = context || window
  context.fn = this
  const args = arguments[1]
  const result = context.fn(...args)
  delete context.fn
  return result
}

function myBind(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  const _this = this
  const args = [...arguments].slice(1)
  const F = function () {
  }
  F.prototype = this.prototype
  const bound = function () {
    const finalArgs = [...args, ...arguments]
    return _this.apply(this instanceof F ? this : context, finalArgs)
  }
  bound.prototype = new F()
  return bound
}


function call(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

function apply(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  context.fn = this
  const args = arguments[1]
  const result = context.fn(...args)
  delete context.fn
  return result
}

function bind(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  const _this = this
  const args = [...arguments].slice(1)
  const F = function () { }
  F.prototype = this.prototype
  const bound = function () {
    const finalArgs = [...args, ...arguments]
    return _this.apply(this instanceof F ? this : context, finalArgs)
  }
  bound.prototype = new F()
  return bound
}

function bind1(context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  const _this = this
  const args = [...arguments].slice(1)
  const F = function () { }
  F.prototype = this.prototype
  const bound = function () {
    const finalArgs = [...args, ...arguments]
    return _this.apply(this instanceof F ? this : context, finalArgs)
  }
  bound.prototype = new F()
  return bound
}
