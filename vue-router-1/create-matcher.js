import { createRouteMap } from "./create-route-map";

export function createMatcher(routes) {
  const pathMap = createRouteMap(routes);
  function addRoute(routes) {
    createRouteMap(routes, pathMap);
  }
  function addRoutes() {}
  function getRoutes() {
    return pathMap;
  }
  function match(location) {
    location = typeof location === "string" ? { path: location } : location;

    return pathMap[location.path];
  }

  return {
    match,
    addRoute,
    addRoutes,
    getRoutes,
  };
}
