import { createMatcher } from "./create-matcher";
import { HashHistory } from "./history/hash";
import { HTML5History } from "./history/html5";
import { install } from "./install";
export default class VueRouter {
  constructor(options) {
    this.options = options;
    this.routes = options.routes;
    this.matcher = createMatcher(options.routes);
    let mode = options.mode || "hash";
    this.mode = mode || "hash";

    switch (mode) {
      case "history":
        this.history = new HTML5History(this);
        break;
      case "hash":
        this.history = new HashHistory(this);
    }
  }

  match(location) {
    return this.matcher.match(location);
  }
  getRoutes() {
    return this.matcher.getRoutes();
  }
  addRoute(parentOrRoute) {
    this.matcher.addRoute(parentOrRoute, route);
  }
  addRoutes(routes) {
    this.matcher.addRoutes(routes);
  }
}

VueRouter.install = install;
