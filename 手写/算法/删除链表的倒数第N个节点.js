function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
}
