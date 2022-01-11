import { arrayMethods } from "./array";
import Dep from "./dep";

class Observer {
  constructor(value) {
    Object.defineProperty(value, "__ob__", {
      value: this,
      enumerable: false,
    });

    if (Array.isArray(value)) {
      value.__proto__ = arrayMethods;
      this.observerArray(value);
    } else {
      this.walk(value);
    }
  }
  walk(data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = data[key];
      defineReactive(data, key, value);
    }
  }

  observerArray(items) {
    for (let i = 0; i < items.length; i++) {
      observe(items[i]);
    }
  }
}

function defineReactive(data, key, value) {
  const childOb = observe(value);

  let dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set(newVal) {
      if (newVal !== value) {
        observe(newVal);
        value = newVal;
        dep.notify();
      }
    },
  });
}

function dependArray(value) {
  for (let i = 0; i < value.length; i++) {
    const e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

export function observe(data) {
  if (typeof data === "object") {
    return new Observer(data);
  }
}
