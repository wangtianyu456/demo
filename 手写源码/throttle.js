// function throttle(func, wait) {
//   let timeout;
//   return function() {
//     let context = this;
//     let args = arguments;
//     if (!timeout) {
//       timeout = setTimeout(function() {
//         timeout = null;
//         func.apply(context, args);
//       }, wait);
//     }
//   };
// }

function throttle(fn, wait) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        clearTimeout(timer);
      }, wait);
    }
  };
}
