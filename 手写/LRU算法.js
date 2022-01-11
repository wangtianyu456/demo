class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.secretKey = new Map();
  }
  get(key) {
    if (this.secretKey.has(key)) {
      let value = this.secretKey.get(key);
      this.secretKey.delete(key);
      this.secretKey.set(key, value);
    } else return -1;
  }
  put(key, value) {
    if (this.secretKey.has(key)) {
      this.secretKey.delete(key);
      this.secretKey.set(key, value);
    } else if (this.secretKey.size < this.capacity) {
      this.secretKey.set(key, value);
    } else {
      // 超出
      this.secretKey.delete(this.secretKey.keys().next().value);
      this.secretKey.set(key, value);
    }
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.secretKey = new Map();
  }
  get(key) {
    if (this.secretKey.has(key)) {
      const value = this.secretKey.get(key);
      this.secretKey.delete(key);
      this.secretKey.set(key, value);
      return value;
    } else return -1;
  }

  put(key, value) {
    if (this.secretKey.has(key)) {
      // 替换
      this.secretKey.delete(key);
      this.secretKey.set(key, value);
    } else {
      // 添加
      if (this.secretKey.size < this.capacity) {
        //
        this.secretKey.set(key, value);
      } else {
        this.secretKey.delete(this.secretKey.keys().next().value);
        this.secretKey.set(key, value);
      }
    }
  }
}

class LRUCache {
  constructor(size) {
    this.size = size;
    this.keys = [];
    this.cache = {};
  }

  put(key, value) {
    const curIndex = this.getIndexByKey(key);
    if (curIndex) {
      this.keys.splice(curIndex, 1);
      this.keys.push(key);
      this.cache[key] = value;
    } else {
      if (this.keys.length >= this.size) {
        // 超出了 删除老的
        const [deleteKey] = this.keys.splice(0, 1);
        this.keys.push(key);
        this.cache[deleteKey] = null;
        // 添加新的
        this.keys.push(key);
      } else {
        this.keys.push(key);
        this.cache[key] = value;
      }
    }
  }

  get(key) {
    const curIndex = this.getIndexByKey(key);
    this.keys.splice(curIndex, 1);
    this.keys.push(key);
    return this.cache[key];
  }

  getIndexByKey(key) {
    return this.keys.findIndex(key);
  }
}

class LRUCache {
  constructor(size) {
    this.size = size;
    this.cache = new Map();
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.set(key, value);
    } else {
      if (this.cache.size >= this.size) {
        this.cache.delete(this.cache.keys().next().value);
        this.cache.set(key, value);
      } else {
        this.cache.set(key, value);
      }
    }
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache[key];
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    } else {
      return -1;
    }
  }
}

class LRUCache {
  constructor(size) {
    this.size = size;
    this.cache = new Map();
  }

  put(key, value) {
    const value = this.cache[key];
    if (value) {
      this.cache.delete(key);
      this.cache.set(key, value);
    } else {
      if (this.cache.size < this.size) {
        this.cache.set(key, value);
      } else {
        this.cache.delete(this.cache.keys().next().value);
        this.cache.set(key, value);
      }
    }
  }

  get(key) {
    const value = this.cache[key];
    if (value) {
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}
