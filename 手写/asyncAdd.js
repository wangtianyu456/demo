/**
 *
 * 提供一个异步 add 方法如下，需要实现一个 await sum(...args) 函数：
 *
    function asyncAdd(a, b, callback) {
      setTimeout(function () {
        callback(null, a + b);
      }, 1000);
    }
 *
 */

function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 1000);
}

// async function sum(a, b) {
//   return await new Promise((resolve, reject) => {
//     asyncAdd(a, b, (err, res) => {
//       if (!err) {
//         resolve(res);
//         return;
//       }
//       reject(err);
//     });
//   });
// }

// async function _sum(...args) {
//   return new Promise((resolve) => {
//     args
//       .reduce((acc, cur) => {
//         acc.then((total) => _sum(total, cur));
//       }, Promise.resolve(0))
//       .then(resolve);
//   });
// }

async function sum(...args) {
  console.log(args);

  async function sumT(a, b) {
    return await new Promise((resolve, reject) => {
      asyncAdd(a, b, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  }

  if (args.length === 1) return args[0];
  let result = [];
  for (let i = 0; i < args.length - 1; i += 2) {
    result.push(sumT(args[i], args[i + 1]));
  }
  if (args.length % 2) result.push(args[args.length - 1]);
  return sum(...(await Promise.all(result)));
}
