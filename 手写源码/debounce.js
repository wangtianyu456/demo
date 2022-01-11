// function debounce(func, wait) {
//   let timeout
//   return function () {
//     clearTimeout(timeout)
//     timeout = setTimeout(func, wait)
//   }
// }

// function debounce(func, wait) {
//   let timeout;
//   return function() {
//     let context = this;
//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       func.apply(context);
//     }, wait);
//   };
// }

// function debounce(func, wait) {
//   let timeout;
//   return function() {
//     let context = this;
//     let args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       func.apply(context, args);
//     }, wait);
//   };
// }

function debounce(fn, wait) {
  let timer;
  return function () {
    const context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
