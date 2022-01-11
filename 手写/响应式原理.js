class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach((sub) => sub.update());
  }
}

class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.cb = cb;
    this.value = this.get();
  }
  get() {
    Dep.target = this;
    // 取值
    Dep.target = null;
    return value;
  }
  upate() {
    queueWatch(this);
  }
  run() {
    const val = this.get();
    this.cb.call(vm, val, this.value);
    this.value = val;
  }
}

const Observer = (obj) => {
  const dep = new Dep();
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
    },
    set(target, key, value, receiver) {
      dep.notify();
    },
  });
};
export function observe(obj) {
  Object.keys(obj).forEach((key) => {
    obj[key] = observe(obj[key]);
  });
  return Observer(obj);
}

let queue = [];
let pending = false;
function nextTick(cb) {
  queue.push(cb);
  if (!pending) {
    pending = true;
    Promise.resolve().then(flushCallback);
  }
}
function flushCallback() {
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }
  queue = [];
}
