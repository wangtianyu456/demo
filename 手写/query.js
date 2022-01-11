const url = `www.baidu.com?name=wang&password=123456`;
// function parseUrl(url) {
//   const reg = /([^&=?]+)=([^&=?]+)/g;
//   let arr = url.match(reg);
//   return arr.reduce((prev, cur) => {
//     const [key, value] = cur.split("=");
//     prev[key] = value;
//     return prev;
//   }, {});
// }

// const _parseUrl = (url) => {
//   const reg = /([^=?&]+)=([^=?&]+)/g;
//   const arr = url.match(reg);
//   return arr.reduce((memo, curr) => {
//     const [key, value] = curr.split("=");
//     memo[key] = value;
//     return memo;
//   }, {});
// };

const _parseUrl = (url) => {
  const reg = /([^=&?]+)=([^=&?]+)/g;
  const arr = url.match(reg);
  console.log(arr);
};

console.log(_parseUrl(url));
