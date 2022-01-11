function deepClone(obj) {
  if (typeof obj !== "object") return;
  let newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}

function deepClone_(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let newObj = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone_(obj[key]) : obj[key]
    }
  }
  return newObj
}


function deepClone__(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  const newObj = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const item = obj[key]
      newObj[key] = typeof item === 'object' ? deepClone__(item) : item
    }
  }
  return newObj
}
