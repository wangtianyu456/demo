class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(watcher) {
    this.subs.push(watcher);
  }

  notify() {
    this.subs.forEach(watcher => {
      watcher.update();
    });
  }
}

class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    // 默认先存放一个旧值，当新值和旧值不相等时，再去更新(通知订阅者)
    this.oldValue = this.get();
  }
  get() {
    Dep.target = this;
    const value = CompileUtil.getVal(this.vm, this.expr);
    Dep.target = null;
    return value;
  }

  update() {
    let newVal = CompileUtil.getVal(this.vm, this.expr);
    if (newVal !== this.oldValue) {
      this.cb(newVal);
    }
  }
}

class Observer {
  constructor(data) {
    this.observer(data);
  }

  observer(data) {
    if (data && typeof data === "object") {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.defineReactive(data, key, data[key]);
        }
      }
    }
  }

  defineReactive(obj, key, value) {
    // 给当前的value再递归执行observer，如果value为对象，则继续遍历给其中的属性设置set和get
    this.observer(value);

    let dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set: newVal => {
        if (newVal !== value) {
          this.observer(newVal);
          value = newVal;
          dep.notify();
        }
      }
    });
  }
}

class Compiler {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;

    let fragment = this.node2Fragment(this.el);

    this.compile(fragment);
  }

  isElementNode(node) {
    return node.nodeType === 1;
  }

  node2Fragment(node) {
    let fragment = document.createDocumentFragment();
    let firstChild;
    while ((firstChild = node.firstChild)) {
      fragment.appendChild(firstChild);
    }
    return fragment;
  }

  compile(node) {
    let childNodes = [...node.childNodes];
    childNodes.forEach(child => {
      // 判断节点时元素还是文本
      if (this.isElementNode(child)) {
        this.compileElement(child);
        // 如果是元素的话，需要把自己传进去，递归子节点
        this.compile(child);
      } else {
        this.compileText(child);
      }
    });
  }
  isDirective(attr) {
    return attr.startsWith("v-");
  }

  compileElement(node) {
    let attributes = [...node.attributes];
    attributes.forEach(attr => {
      let { name, value: expr } = attr;
      // 判断行间属性是否为v-开头，取出包含指令的元素节点
      if (this.isDirective(name)) {
        // 将指令名字取出
        let [, directive] = name.split("-");
        let [directiveName, eventName] = directive.split(":");
        CompileUtil[directiveName](node, expr, this.vm, eventName);
      }
    });
  }

  compileText(node) {
    let content = node.textContent;
    if (/\{\{(.+?)\}\}/g.test(content)) {
      CompileUtil["text"](node, content, this.vm);
    }
  }
}

const CompileUtil = {
  getContentValue(vm, expr) {
    // 将所有的表达式转为数据，生成一个完整的内容
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(vm, args[1]);
    });
  },
  getVal(vm, expr) {
    return expr.split(".").reduce((data, current) => {
      return data[current];
    }, vm.$data);
  },
  text(node, expr, vm) {
    let fn = this.updater["textUpdater"];
    let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      new Watcher(vm, args[1], () => {
        fn(node, this.getContentValue(vm, expr));
      });
      return this.getVal(vm.args[1]);
    });
  },

  updater: {
    modelUpdater(node, value) {
      node.value = value;
    },
    textUpdater(node, value) {
      node.textContent = value;
    }
  }
};

class Vue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;

    if (this.$el) {
      new Observer(this.$data);
      this.proxyData(this.$data)

      new Compiler(this.$el, this);
    }
  }

  proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return data[key]
        },
        set(newValue) {
          data[key] = newValue
        }
      })
    })
  }
}
