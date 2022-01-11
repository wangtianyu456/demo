const cache = {};
function require(moduleId) {
  const cachedModule = cache[moduleId];
  if (cachedModule) {
    return cachedModule.exports;
  }
  const module = (cache[moduleId] = {
    exports: {},
  });
  modules[moduleId](module, module.exports, require);
  return module.exports;
}
