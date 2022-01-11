function objectFactory() {
  let obj = {}
  let Constructor = [...arguments].shift()
  obj.__proto__ = Constructor.prototype
  let result = Constructor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}

function newFunc() {
  let obj = {}
  let Consturctor = [...arguments].shift()
  obj.__proto__ = Consturctor.prototype
  let result = Consturctor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}

function newFunc() {
  let obj = {}
  let Constructor = [...arguments].shift()
  obj.__proto__ = Constructor.prototype
  let result = Constructor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}
