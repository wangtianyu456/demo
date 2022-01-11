function mergeList(l1, l2) {
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }
  const newHead = new ListNode(0);
  const temp = newHead;
  while (l1 || l2) {
    if (l1 === null) {
      newHead.next = l2;
      break;
    }
    if (l2 === null) {
      newHead.next = l1;
      break;
    }
    if (l1.val < l2.val) {
      newHead.next = l1;
      newHead = newHead.next;
      l1 = l1.next;
    } else {
      newHead.next = l2;
      newHead = newHead.next;
      l2 = l2.next;
    }
  }
  return temp;
}
