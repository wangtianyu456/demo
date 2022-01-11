function mergeOptions(parentVal, childVal) {}
let cid = 0;
Vue.extend = function extend(extendOptions) {
  const Sub = function VueComponent(options) {
    // init 的时候会拿 Vue.options 和 当前传进来的 options 合并
    this._init(options);
  };
  Sub.prototype = this.prototype;
  Sub.prototype.constructor = Sub;
  Sub.cid = cid++;
  // Vue.options 和 传进来的 options
  Sub.options = mergeOptions(this.options, extendOptions);
};
