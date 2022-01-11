const strategies = {};

function defaultStrategy(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
}

const LIFECYCLE_HOOKS = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
];

function mergeHook(parentVal, childVal) {
  if (parentVal) {
    if (childVal) {
      // concat可以拼接值和数组，但是相对于push来说，会返回拼接后新数组，不会改变原数组
      return parentVal.concat(childVal);
    }
    return parentVal;
  } else {
    return [childVal];
  }
}

LIFECYCLE_HOOKS.forEach((hook) => {
  strategies[hook] = mergeHook;
});

export default function mergeOptions(parent, child) {
  const options = {};
  function mergeField(key) {
    const strategy = strategies[key] || defaultStrategy;
    options[key] = strategy(parent[key], child[key]);
  }

  for (const key in parent) {
    if (parent.hasOwnProperty(key)) {
      mergeField(key);
    }
  }
  for (const key in child) {
    if (child.hasOwnProperty(key) && !parent.hasOwnProperty(key)) {
      mergeField(key);
    }
  }

  return options;
}
