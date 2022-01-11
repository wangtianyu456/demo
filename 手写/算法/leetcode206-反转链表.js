const reverseList = (head) => {
  let prev = null;
  let cur = head;
  while (cur && cur.next) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

const reverseList = (head) => {
  if (!head || !head.next) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

// 迭代法
const reverseList = (head) => {
  const pre = null;
  const cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return head;
};

// 递归法
const reverseList = (head) => {
  if (!head || !head.next) {
    return head;
  }
  const newHead = reverseList(head.next);
  // 跳出的时候 当前的 head 是倒数第二个，head.next 也就是最后一个节点
  head.next.next = head;
  head.next = null;
  return newHead;
};

const reverseList = (head) => {
  const pre = null;
  const cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return head;
};
