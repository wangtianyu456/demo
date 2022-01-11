/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  let cur = dummy.next;
  while (cur) {
    const next = cur.next;
    if (cur.val === val) {
      pre.next = cur.next;
      cur = next;
    } else {
      pre = pre.next;
      cur = next;
    }
  }
  return dummy.next;
};
