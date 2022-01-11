function _instanceOf(left, right) {
  if (typeof left !== "object" || left == null) return false;
  let leftProto = left.__ptoto__;
  while (true) {
    if (leftProto == null) return false;
    if (leftProto === right.prototype) return true;
    leftProto = leftProto.__ptoto__;
  }
}
