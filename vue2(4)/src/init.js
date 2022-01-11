import { callHook, mountComponent } from "./lifecycle";
import mergeOptions from "./shared/merge-options";
import initState from "./state";

function query(el) {
  if (typeof el === "string") {
    return document.querySelector(el);
  }
  return el;
}

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;
    vm.$options = mergeOptions(vm.constructor.options, options);
    callHook(vm, "beforeCreate");
    initState(vm);
    callHook(vm, "created");
    const { el } = options;
    if (el) {
      vm.$mount(el);
    }
  };

  Vue.prototype.$mount = function (el) {
    el = query(el);
    const vm = this;
    const options = vm.$options;
    if (!options.render) {
      let template = options.template;
      if (!template && el) {
        template = el.outerHTML;
      }
      options.render = compileToFunctions(template);
    }
    mountComponent(vm);
  };
}

export default initMixin;
