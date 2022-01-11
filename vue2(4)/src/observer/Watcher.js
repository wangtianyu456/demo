import { nextTick } from "../shared/utils";
import { popTarget, pushTarget } from "./Dep";

let id = 0;
export class Watcher {
  constructor(vm, exprOrFn, cb, options) {
    this.id = id++;
    this.vm = vm;
    this.exprOrFn = exprOrFn;
    this.cb = cb;
    this.options = options;
    this.user = options.user;

    this.lazy = options.lazy;
    this.dirty = options.dirty;

    this.deps = [];
    this.depIds = new Set();

    if (typeof this.exprOrFn === "function") {
      this.getter = this.exprOrFn;
    }

    if (typeof this.exprOrFn === "string") {
      this.getter = function () {
        return this.exprOrFn.split(".").reduce((memo, curr) => memo[curr], vm);
      };
    }
    this.value = this.get();
  }

  get() {
    pushTarget(this);
    const value = this.getter();
    popTarget();
    return value;
  }
  addDep(dep) {
    if (!this.depIds.has(dep.id)) {
      this.deps.push(dep);
      this.depIds.add(dep.id);
      dep.addSub(this);
    }
  }

  update() {
    queueWatcher(this);
  }

  run() {
    const value = this.get();
    if (this.user) {
      this.cb.call(this.vm, value, this.value);
      this.value = value;
    }
  }
}

let queue = [];
let has = {};
let pending = false;

function flushSchedulerQueue() {
  queue.forEach((watcher) => {
    watcher.run();
    if (watcher.options.render) {
      watcher.cb();
    }
  });
  queue = [];
  has = {};
  pending = false;
}

function queueWatcher(watcher) {
  const id = watcher.id;
  if (!has[id]) {
    queue.push(watcher);
    has[id] = true;
    if (!pending) {
      pending = true;
      nextTick(flushSchedulerQueue);
    }
  }
}
