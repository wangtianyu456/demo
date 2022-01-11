function _instanceof(left, right) {
  let prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null) {
      return false;
    }
    if (prototype === left) {
      return true;
    }
    left = left.__proto__;
  }
}

function __instanceof(left, right) {
  let prototype = right.prototype;
  let left = left.__ptoto__;
  while (true) {
    if (left === null) {
      return false;
    }
    if (left === prototype) {
      return true;
    }
    left = left.__proto__;
  }
}

function ___instanceof(left, right) {
  let left = left.__proto__;
  while (true) {
    if (left === null) {
      return false;
    }
    if (left === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
}
