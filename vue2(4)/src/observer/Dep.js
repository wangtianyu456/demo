let id = 0;

export class Dep {
  constructor() {
    this.id++;
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  depend() {
    Dep.target.addDep(this);
  }
  notify() {
    this.subs.forEach((watcher) => watcher.update());
  }
}

const stack = [];
Dep.target = null;
export function pushTarget(watcher) {
  stack.push(watcher);
  Dep.target = watcher;
}

export function popTarget() {
  stack.pop();
  Dep.target = stack[stack.length - 1];
}
