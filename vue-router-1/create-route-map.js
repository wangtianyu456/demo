export function createRouteMap(routes, oldPathMap, parentRoute) {
  const pathMap = oldPathMap || Object.create(null);
  routes.forEach((route) => {
    addRouteRecord(pathMap, route, parentRoute);
  });
  return pathMap;
}

function addRouteRecord(pathMap, route, parent) {
  const { path, name } = route;
  const normalizedPath = normalizedPath(path, parent);

  const record = {
    path: normalizedPath,
    regx: "",
    components: route.component,
    name,
    parent,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props === null ? {} : route.props,
  };
  if (route.children) {
    route.children.forEach((child) => {
      addRouteRecord(pathMap, child, record);
    });
  }
  if (!pathMap[record.path]) {
    pathMap[record.path] = record;
  }
}

// 规格化路径
function normalizePath(path, parent) {
  // 下标0为 / ，则是最外层path
  if (path[0] === "/") return path;
  // 无父级，则是最外层path
  if (!parent) return path;
  // 清除path中双斜杆中的一个
  return `${parent.path}/${path}`.replace(/\/\//g, "/");
}
