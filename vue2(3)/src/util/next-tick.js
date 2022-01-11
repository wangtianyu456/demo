let callbacks = [];
let pending = false;
export function flushCallbacks() {
  pending = false;
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
  callbacks = [];
}

export function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    Promise.resolve().then(flushCallbacks);
  }
}
