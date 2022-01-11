/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// const isBalanced = function (root) {
//   if (root === null) {
//     return 0;
//   } else {
//     return Math.abs(
//       height(root.left) - height(root.height) &&
//         isBalanced(root.left) &&
//         isBalanced(root.height)
//     );
//   }
// };

// const height = (root) => {
//   if (root === null) {
//     return 0;
//   } else {
//     return Math.max(height(root.left), height(root.right));
//   }
// };

const isBalanced = function (root) {
  return height(root) !== -1;
};

const height = (root) => {
  if (root === null) {
    return 0;
  }
  const left = height(root.left);
  const right = height(root.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
};

const height = (root) => {
  if (root === null) {
    return 0;
  }
  let left = height(root.left);
  let right = height(root.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
};

const height = (root) => {
  if (root === null) {
    return 0;
  }
  let left = height(root.left);
  let right = height(root.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
};
