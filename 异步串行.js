function createFlow(effects = []) {
  let sources = effects.slice().flat()
  function run(callback) {
    while (sources.length) {
      const task = sources.shift()
      if (typeof task === 'function') {
        const res = task()
        if (res?.then) {
          res.then(createFlow(sources).run)
          break
        }
      } else if(task?.isFlow) {
        task.run(createFlow(sources).run)
        break
      }
    }
    callback?.()
  }
  return {
    isFlow: true,
    run
  }
}
