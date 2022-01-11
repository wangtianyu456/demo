function isSymmetrical(root) {
  if (root === null) {
    return true;
  }
  return isSymmetricalTree(root.left, root.right);
}

function isSymmetricalTree(left, right) {
  if (left === null && right === null) {
    return true;
  }
  if (left === null || right === null) {
    return false;
  }
  if (left.val !== right.val) {
    return false;
  }
  return (
    isSymmetricalTree(left.left, right.right) &&
    isSymmetricalTree(left.right, right.left)
  );
}
