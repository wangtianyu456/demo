import { observe } from "./observer";
import { proxy } from "./shared/utils";
export default function initState(vm) {
  const options = vm.$options;
  if (options.props) {
    // initProps(vm);
  }
  if (options.methods) {
    // initMethods(vm);
  }
  if (options.data) {
    initData(vm);
  }
  if (options.computed) {
    initComputed(vm);
  }
  if (options.watch) {
    initWatch(vm);
  }
}
function initData(vm) {
  let data = vm.$options.data;
  vm._data = data = typeof data === "function" ? data.call(vm) : data;
  observe(data);

  for (const key in data) {
    proxy(vm, "_data", key);
  }
}

function initComputed(vm) {
  const { computed } = vm.$options;
  const watchers = (vm._computedWatchers = {});
  for (const key in computed) {
    if (computed.hasOwnProperty(key)) {
      const userDef = computed[key];
      const getter = typeof userDef === "function" ? userDef : userDef.get;
      watchers[key] = new Watcher(vm, getter, () => {}, { lazy: true });
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed(vm, key, userDef) {
  let sharedProperty = {};
  if (typeof userDef === "function") {
    sharedProperty.get = userDef;
  } else {
    //
  }
}

function initWatch(vm) {
  const { watch } = vm.$options;
  for (const key in watch) {
    if (watch.hasOwnProperty(key)) {
      const userDefine = watch[key];
      if (Array.isArray(userDefine)) {
      } else {
        createWatcher(vm, key, watch[key]);
      }
    }
  }
}

function createWatcher(vm, key, userDefine) {
  let handler;
  if (typeof userDefine === "string") {
    handler = vm[userDefine]; // methods
    userDefine = {};
  } else if (typeof userDefine === "function") {
    handler = userDefine;
    userDefine = {};
  } else {
    handler = userDefine.handler;
    delete userDefine.handler;
  }
  vm.$watch(key, handler, userDefine);
}

Vue.prototype.$watch = function (exprOrFn, cb, options) {
  const vm = this;
  const watch = new Watcher(vm, exprOrFn, cb, { ...options, user: true });
};
