import {} from "./";
let id = 0;
export default class Watcher {
  constructor(vm, exprOrFn, cb, options) {
    this.vm = vm;
    this.exprOrFn = exprOrFn;
    this.cb = cb;
    this.options = options;
    this.id = id++;
    this.deps = [];
    this.depsId = new Set();

    this.lazy = options.lazy;
    this.dirty = this.lazy;

    this.user = options.user;

    if (typeof exprOrFn === "function") {
      this.getter = exprOrFn;
    } else {
      // expr
      this.getter = function () {
        let path = exprOrFn.split(".");
        return path.reduce((memo, curr) => {
          return memo[curr];
        }, vm);
      };
    }
    this.value = this.lazy ? undefined : this.get();
  }

  get() {
    pushTarget(this);
    const res = this.getter.call(this.vm);
    popTarget();
    return res;
  }

  addDep(dep) {
    let id = dep.id;
    if (!this.depsId.has(id)) {
      this.depsId.add(id);
      this.deps.push(dep);
      dep.addSub(this);
    }
  }
  update() {
    if (this.lazy) {
      this.dirty = true;
    } else {
      queueWatcher(this);
    }
  }
  evaluate() {
    this.value = this.get();
    this.dirty = false;
  }

  depend() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  }

  run() {
    const newValue = this.get();
    const oldValue = this.value;
    if (this.user) {
      if (newValue !== oldValue) {
        this.cb.call(this.vm, newValue, oldValue);
      }
    } else {
      this.cn.call(this.vm);
    }
  }
}
