/*
  Vue 数据双向绑定的实现逻辑中，有三个重要的角色
  - observer(监听器)：此处observer并不仅仅是订阅者(数据监听器)，同时还需要对监听到的数据进行转发 -- 也就说它同时也是一个发布者
  - watcher(订阅者)：观察者，observer把数据转发给了真正的订阅者--watcher对象。watcher接收到新的数据后，会去更新视图
  - compile(编译器)：MVVM框架的特有角色，负责对每个节点元素指令进行扫描和解析，指令的数据初始化、订阅者的创建这些杂货也归他管
*/

// observe
function observe(target) {
  // 若target是一个对象，则遍历它
  if (target && typeof target === 'object') {
    Object.keys(target).forEach(key => {
      defineReactive(target, key, target[key])
    })
  }
}

// defineReactive
function defineReactive(target, key, val) {
  const dep = new Dep()
  // 属性值也可能是Object类型，这种情况下需要调用observe进行递归
  observe(val)
  // 为当前的属性安装监听器
  Object.defineProperty(target, key, {
    // 可枚举
    enumerable: true,
    // 不可配置 删除
    configurable: false,
    get: function () {
      return val
    },
    // 监听器函数
    set: function (value) {
      dep.notify()
    }
  })
}

// 订阅者Dep
class Dep {
  constructor() {
    // 初始化订阅队列
    this.subs = []
  }

  // 增加订阅者
  addSub(sub) {
    this.subs.push(sub)
  }

  // 通知订阅者
  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
