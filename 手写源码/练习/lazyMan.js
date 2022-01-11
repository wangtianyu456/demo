class LazyManClass {
  constructor(name) {
    this.taskList = []
    this.name = name
    console.log(`Hi i am ${name}`)
    setTimeout(() => {
      this.next()
    }, 0)
  }

  eat(food) {
    const fn = (food => {
      return () => {
        console.log(`eat ${food}`)
        this.next()
      }
    })(food)
    this.taskList.push(fn)
    return this
  }
  sleepFirst(time) {
    const fn = (time => {
      return () => {
        setTimeout(() => {
          console.log(`sleepFirst ${time}`)
          this.next()
        }, time)
      }
    })(time)
    this.taskList.unshift(fn)
    return this
  }

  sleep(time) {
    const fn = (time => {
      return () => {
        setTimeout(() => {
          console.log(`sleep ${time}`)
          this.next()
        }, time)
      }
    })(time)
    this.taskList.push(fn)
    return this
  }

  next() {
    const fn = this.taskList.shift()
    fn && fn()
  }
}

function lazyMan(name) {
  return new LazyManClass(name)
}

lazyMan('wang').eat('banana').eat('apple').sleep('1000').eat('orange').sleepFirst(1000)
