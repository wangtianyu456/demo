export let _Vue;
export function install(Vue) {
  install.installed = true;

  _Vue = Vue;

  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._route = {};
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
    },
  });

  Object.defineProperty(Vue.prototype, "$router", {
    get() {
      return this._routerRoot._router;
    },
  });

  Object.defineProperty(Vue.prototype, "$route", {
    get() {
      return this._routerRoot._route;
    },
  });

  Vue.component("RouterView", {});
  Vue.component("RouterLink", {});
}
