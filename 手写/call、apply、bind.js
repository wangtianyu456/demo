Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  const _this = this;
  const F = new Function();
  F.prototype = this.prototype;
  const bound = function () {
    const finalArgs = [...args, ...arguments];
    return _this.apply(this instanceof F ? this : context, finalArgs);
  };
  bound.prototype = new F();
  return bound;
};

function call(context, ...args) {
  context = context || window;
  context.fn = this;
  const res = context.fn(...args);
  delete context.fn;
  return res;
}

function apply(context, args) {
  context = context || window;
  context.fn = this;
  const res = context.fn(args);
  delete context.fn;
  return res;
}

function bind(context, args) {
  context = context || window;
  const _this = this;
  const F = new Function();
  F.prototype = this.prototype;
  const bound = function (...args2) {
    const finalArgs = [...args, ...args2];
    return _this.apply(this instanceof F ? this : context, finalArgs);
  };
  bound.prototype = new F();
  return bound;
}

function _call(context, ...args) {
  context = context || window;
  context.fnn = this;
  const result = context.fn(...args);
  delete context.f;
  return result;
}

function _bind(context, ...args) {
  context = context || window;
  const _this = this;
  let F = new Function();
  F.prototype = this.prototype;
  const bound = function (...args2) {
    const finalArgs = [...args, ...args2];
    return _this.apply(this instanceof F ? this : context, finalArgs);
  };
  bound.prototype = new F();
  return bound;
}

Function.prototype._apply = function (context, args) {
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

function __bind(context, ...args) {
  context = context || window;

  const _this = this;

  // const fn = new Function();
  // fn.prototype = this.prototype;

  const bound = function (...args2) {
    const finalArgs = [...args, ...args2];
    return _this.apply(this instanceof _this ? this : context, finalArgs);
  };
  bound.prototype = Object.create(this.prototype);
}

function myCall() {}
