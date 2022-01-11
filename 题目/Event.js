class Event {
  constructor() {
    this.subs = {};
  }

  on(eventName, fn, ...arg) {
    if (this.subs[eventName]) {
      this.subs[eventName].set(fn, (...args1) => fn(...arg, ...args1));
    } else {
      this.subs[eventName] = new Map();
      this.subs[eventName].set(fn, (...args1) => fn(...arg, ...args1));
    }
  }

  fire(eventName, ...args) {
    this.subs[eventName].forEach((fn) => {
      fn(...args);
    });
  }

  off(eventName, fn) {
    if (this.subs[eventName]) {
      this.subs[eventName].delete(fn);
    }
  }

  once(eventName, fn, ...args) {
    if (this.subs[eventName]) {
      this.subs[eventName].set(fn, (...args1) => {
        fn(...args, ...args1);
        this.off(eventName, fn);
      });
    } else {
      this.subs[eventName] = new Map();
      this.subs[eventName].set(fn, (...args1) => {
        fn(...args, ...args1);
        this.off(eventName, fn);
      });
    }
  }
}

const event1 = new Event();
function fn1(...arg) {
  console.log("fn1", ...arg);
}
function fn2(...arg) {
  console.log("fn2", ...arg);
}

function once(...arg) {
  console.log("once =>", ...arg);
}

// event1.on("sleep", fn1, 1, 2, 3);
// event1.on("sleep", fn2, 4, 5, 6);
// event1.fire("sleep", 7, 8, 9);

event1.on("console", once, 1, 2, 3);
event1.fire("console");
event1.fire("console");

// event1.once("console", once, "console.log once");
// event1.fire("console");
// event1.fire("console");
