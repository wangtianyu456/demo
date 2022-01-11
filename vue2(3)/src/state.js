import Dep from "./observer/dep";
import Wather from "./observer/watcher";
export function initState(vm) {
  const opts = vm.$options;
  if (opts.props) {
    // initProps(vm);
  }
  if (opts.methods) {
    // initMethods(vm)
  }
  if (opts.data) {
    initData(vm);
  }
  if (opts.computed) {
    initComputed(vm);
  }
  if (opts.watch) {
    initWatch(vm);
  }

  //
}

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: () => {},
  set: () => {},
};

function defineComputed(target, key, userDef) {
  if (typeof userDef === "function") {
    sharedPropertyDefinition.get = createComputedGetter(key);
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function () {
    const watcher = this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
        if (Dep.target) {
          watcher.depend();
        }
      }
      return watcher.value;
    }
  };
}

function initComputed(vm) {
  const computed = vm.$options.computed;
  const watchers = (vm._computedWatchers = {});
  for (let k in computed) {
    const userDef = computed[k];
    const getter = typeof userDef === "function" ? userDef : userDef.get;
    watchers[k] = new Wather(vm, getter, () => {}, { lazy: true });
    defineComputed(vm, k, userDef);
  }
}

function initWatch(vm) {
  let watch = vm.$options.watch;
  for (let k in watch) {
    const handler = watch[k];
    // 方法
    createWatcher(vm, k, handler);
  }
}

function createWatcher(vm, exprOrFn, handler, options = {}) {
  if (typeof handler === "object") {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === "function") {
    handler = vm[handler];
  }

  return vm.$watch(exprOrFn, handler, options);
}

function initData(vm) {
  let data = vm.$options.data;

  data = vm_data = typeof data === "function" ? data.call(vm) : data || {};

  for (let key in data) {
    proxy(vm, "_data", key);
  }
}

function proxy(object, sourceData, key) {
  Object.defineProperty(object, key, {
    get() {
      return object[sourceData][key];
    },
    set(newValue) {
      object[sourceData][key] = newValue;
    },
  });
}
