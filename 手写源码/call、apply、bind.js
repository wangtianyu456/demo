function myCall(context) {
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

function myApply(context) {
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }
  context = context || window;
  context.fn = this;
  const args = arguments[1];
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

function myBind(context) {
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }
  let _this = this;
  const args = [...arguments].slice(1);
  let F = function () {};
  F.prototype = this.prototype;
  const bound = function () {
    const finalArgs = [...args, ...arguments];
    return _this.apply(this instanceof F ? this : context, finalArgs);
  };
  bound.prototype = new F();
  return bound;
}
