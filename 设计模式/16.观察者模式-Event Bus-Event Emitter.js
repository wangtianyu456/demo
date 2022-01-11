// 全局事件总线
// 全局事件总线，严格来说不能说是观察者模式，而是发布-订阅模式
// Event Bus/Event Emitter 作为全局事件总线，它起到的是一个「沟通桥梁」的作用，我们可以把它理解为一个事件中心，我们所有事件的订阅/发布都不能由丁玉芳和发布方私下沟通，必须要委托这个事件中心帮我们实现
// 在Vue中，有时候A组件和B组件之间隔了很远，但是我们希望他们能实现通讯。这种情况下，除了借助Vuex之外，我们也可以通过借助Event Bus来实现

// 实现一个Event Bus
class EventEmitter {
  constructor() {
    // handlers 是一个map，用来存储事件和回调之间的对应关系
    this.handlers = {}
  }

  // on 用于安装事件监听器，即添加订阅方法
  on(eventName, cb) {
    // 先检查一下目标时间名有没有对应的监听函数队列
    if (!this.handlers[eventName]) {
      // 如果没有则，初始化一个监听函数队列
      this.handlers[eventName] = []
    }
    // 把回调推入到目标事件对象的监听函数队列中去
    this.handlers[eventName].push(cb)
  }

  // emit 用于触发目标事件
  emit(eventName, ...args) {
    // 检查目标事件是否有监听函数队列
    if (this.handlers[eventName]) {
      // 如果有，则逐个调用队列里的回调函数
      this.handlers[eventName].forEach(cb => {
        cb && cb(...args)
      })
    }
  }

  // 移除某个事件回调队列里的指定回调函数
  off(eventName, cb) {
    const callbacks = this.handlers[eventName]
    const index = callbacks.indexOf(cb)
    if (index !== -1) {
      callbacks.splice(index, 1)
    }
  }

  // 为事件注册单次监听器
  once(eventName, cb) {
    // 对回调函数进行包装，使其执行完毕就自动被移除
    const wrapper = (...args) => {
      cb.apply(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}
