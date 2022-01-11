import { initGlobalApi } from "./global-api";
import initMixin from "./init";

function Vue(options) {
  this._init(options);
}
initMixin(Vue);
initGlobalApi(Vue);

export default Vue;
