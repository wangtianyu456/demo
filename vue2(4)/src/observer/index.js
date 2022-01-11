import arrayMethods, { dependArray } from "./array";
import { Dep } from "./Dep";

export function observe(data) {
  if (typeof data === "object" && data !== null) {
    if (data.__ob__) {
      return data.__ob__;
    }
    return new Observer(data);
  }
}

class Observer {
  constructor(value) {
    this.value = value;
    this.dep = new Dep();
    Object.defineProperty(this.value, "__ob__", {
      value: this,
      enumerable: false,
    });

    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods);
      this.observeArray();
    } else {
      this.walk();
    }
  }

  walk() {
    Object.keys(this.value).forEach((key) => {
      defineReactive(this.value, key, this.value[key]);
    });
  }

  observeArray(value) {
    for (let i = 0; i < value.length; i++) {
      observe(value[i]);
    }
  }
}

function defineReactive(data, key, value) {
  const childOb = observe(value);
  const dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          dependArray(value);
        }
      }
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        observe(newValue);
        value = newValue;
      }
    },
  });
}
