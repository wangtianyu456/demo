function mySetInterval(fn, time) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, time);
  }
  timer = setTimeout(interval, time);
  return {
    cancel: () => {
      if (timer) {
        clearTimeout(timer);
      }
    },
  };
}

function _mySetInterval(fn, time) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, time);
  }
  timer = setTimeout(interval, time);
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}
