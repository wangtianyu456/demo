/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const KthLargest = (root, k) => {
  let res = null;
  const dfs = (root) => {
    dfs(root.right);
    if (k === 0) return;
    if (--k === 0) {
      res = root.val;
    }
    dfs(root.left);
  };
  dfs(root);
  return res;
};
