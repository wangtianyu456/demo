import mergeOptions from "../shared/merge-options";

export function initGlobalApi(Vue) {
  Vue.options = {};
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

function set(target, key, value) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, value);
    return value;
  }
  if (key in target) {
    target[key] = value;
    return value;
  }
  let ob = target.__ob__;
  if (!ob) {
    target[key] = value;
    return value;
  }
  defineReactive(ob.value, key, value);
  ob.dep.notify();
  return value;
}
