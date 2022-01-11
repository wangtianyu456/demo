/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
  let pre, cur, leftHead;
  const dummy = new ListNode(0);
  dummy.next = head;
  let p = dummy;
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }

  // 找到开始区间的前一个节点
  leftHead = p;
  let start = leftHead.next;
  let pre = start;
  let cur = pre.next;
  for (let i = m; i < n; i++) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  leftHead.next = pre;
  start.next = cur;
  return dummy.next;
};
