class Event {
  constructor() {
    this.events = {};
  }

  on(type, handler) {
    if (this.events[type]) {
      this.events[type].push(handler);
    } else {
      this.events[type] = [handler];
    }
  }

  off(type, handler) {
    if (this.events[type]) {
      const index = this.events[type].indexOf(handler);
      if (index >= 0) {
        this.events[type].splice(index, 1);
      }
    }
  }

  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((fn) => fn(...args));
    }
  }

  once(type, handler) {
    const onceHandler = (...args) => {
      handler(...args);
      this.off(type, onceHandler);
    };
    this.on(type, onceHandler);
  }
}

class Event {
  constructor() {
    this.events = {};
  }

  on(name, fn) {
    if (this.events[name]) {
      this.events[name] = [fn];
    } else {
      this.events[name].push(fn);
    }
  }

  off(name, fn) {
    if (this.events[name]) {
      const index = this.events[name].findIndex(fn);
      if (index >= 0) {
        this.events[name].splice(index, 1);
      }
    }
  }

  emit(name) {
    if (this.events[name]) {
      this.events[name].forEach((fn) => fn());
    }
  }

  once(name, fn) {
    const handler = (...args) => {
      fn(...args);
      this.off(name, handler);
    };
    this.on(name, handler);
  }
}
