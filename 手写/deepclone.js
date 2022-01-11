function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj !== "object") return obj;
  if (typeof obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (hash.get(obj)) return hash.get(obj);
  const copy = new obj.constructor();
  hash.set(obj, copy);
  for (const key in obj) {
    if (obj.hasOwnproperty(key)) {
      copy[key] = deepClone(obj[key], hash);
    }
  }
  return copy;
}

function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj !== "object") return obj;
  if (typeof obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (hash.get(obj)) return hash.get(obj);
  const copy = new obj.constructor();
  hash.set(obj, copy);
  Reflect.ownKeys(obj).forEach((key) => {
    copy[key] = deepClone(obj[key], hash);
  });
  return copy;
}

function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj == null) return obj;
  if (typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (hash.has(obj)) {
    return hash.get(obj);
  }
  const copy = new obj.constructor();
  hash.set(obj, copy);
  Reflect.ownKeys(obj).forEach((key) => {
    copy[key] = deepClone(obj[key], hash);
  });
  return copy;
}

function deepClone(obj, hash = new WeakMap()) {
  const isObject = (val) => typeof val === "object" && val !== null;
  if (!isObject(obj)) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (hash.has(obj)) return hash.get(obj);
  const copy = new obj.constructor();
  hash.set(obj, copy);
  Reflect.ownKeys(obj).forEach((key) => {
    copy[key] = deepClone(obj[key], hash);
  });
  return copy;
}
