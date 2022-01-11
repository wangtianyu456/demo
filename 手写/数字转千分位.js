// function thousandth(str) {
//   str = String(str);
//   return str.replace(/\d(?=(?:\d{3})+$)/g, "$&,");
// }
// console.log(thousandth(1233211));

// const thousandth = (str) => {
//   return str.replace(/\d(?=(?:\d{3}+$))/g, "$&");
// };

// function thousandth(str) {
//   str = String(str);
//   return str.replace(/\d(?=(\d{3})+$)/g, "$&,");
// }
// console.log(thousandth(1233211));

const thousand = (str) => {
  str = String(str);
  const [a, b] = str.split(".");
  const reg = /\d(?=(\d{3})+$)/g;
  return a.replace(reg, "$&,");
};
console.log(thousand(1234567));
