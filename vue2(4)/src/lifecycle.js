import { Wather } from "./observer/Watcher";

export function mountComponent(vm) {
  callHook(vm, "beforeMount");
  function updateComponent() {
    vm._update(vm._render());
  }
  new Wather(vm, updateComponent, () => {}, { render: true });
  callHook(vm, "mounted");
}

export function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vNode) {
    const vm = this;
    patch(vm.$el, vNode);
  };
}

export function callHook(vm, hook) {
  const handlers = vm.$options[hook];
  if (handlers) {
    handlers.forEach((handler) => handler.call(vm));
  }
}
