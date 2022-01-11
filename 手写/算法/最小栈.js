class minStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length) {
      const minValue = this.minStack[this.minStack.length - 1];
      if (value < minValue) {
        this.minStack.push(value);
      }
    } else {
      this.minStack.push(value);
    }
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  pop() {
    const popValue = this.stack.pop();
    if (popValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
