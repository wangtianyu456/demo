class LazyMan {
  constructor(name) {
    setTimeout(() => {
      console.log(`hello my name is ${name}`);
    }, 0);
    return this;
  }
  eat(something) {
    setTimeout(() => {
      console.log(`eat ${something}`);
    }, 0);
    return this;
  }
  sleep(seconds) {
    const delay = seconds * 1000;
    const time = Date.now();
    while (Date.now() - time < delay) {
      // ...
    }
    setTimeout(() => {
      console.log("wake up after" + seconds);
    }, 0);
    return this;
  }
  sleepFirst(seconds) {
    new Promise((resolve) => {
      const delay = seconds * 1000;
      const time = Date.now();
      while (Date.now() - time < delay) {
        // ...
      }
      resolve();
    }).then(() => {
      console.log("sleep first wake up after" + `${seconds}s`);
    });
  }
}
