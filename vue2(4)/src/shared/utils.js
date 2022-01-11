export function proxy(target, sourceData, key) {
  Object.defineProperty(target, key, {
    get() {
      return target[sourceData][key];
    },
    set(newValue) {
      return (target[sourceData][key] = newValue);
    },
  });
}

let callbacks = [];
let pending = false;

function flushCallbacks() {
  callbacks.forEach((cb) => cb());
  callbacks = [];
  pending = false;
}

export function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    Promise.resolve().then(flushCallbacks);
  }
}
