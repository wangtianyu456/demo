class LinkedNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function () {
  this._size = 0;
  this._tail = null;
  this._head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this._size) {
    return -1;
  }
  let node = this._head;
  while (index) {
    node = node.next;
    index--;
  }
  return node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const head = this._head;
  const node = new LinkedNode(val);
  this._head = node;
  node.next = head;
  this._size++;
  if (!this._tail) {
    this._tail = node;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new LinkedNode(val);
  this._size++;
  if (this._tail) {
    this._tail.next = newNode;
    this._tail = newNode;
    return;
  }
  this._tail = newNode;
  this._head = newNode;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) return;
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this._size) {
    this.addAtTail(val);
    return;
  }
  const newNode = new LinkedNode(val);
  const node = this.get(index - 1);
  node.next = newNode;
  this._size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index <= 0 || index >= this._size) return;
  if (index === 0) {
    this._head = this._head.next;
    this._size--;
    return;
  }
  // 前一个节点
  const node = this.get(index - 1);
  node.next = node.next.next;
  if (index === this._size - 1) {
    this._tail = node;
  }
  this._size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
