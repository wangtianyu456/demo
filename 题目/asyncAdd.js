/**
 * 请在 sum函数中调用此函数, 完成数值计算
 * @param {*} a 要相加的第一个值
 * @param {*} b 要相加的第二个值
 * @param {*} callback 相加之后的回调函数
 */
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 100);
}

/**
 * 请在此方法中调用asyncAdd方法, 完成数值计算
 * @param  {...any} rest 传入的参数
 */
// async function sum(...rest) {
//   // 请在此处完善代码
//   let result = rest.shift();
//   for (let num of rest) {
//     result = await new Promise((resolve) => {
//       asyncAdd(result, num, (_, res) => {
//         resolve(res);
//       });
//     });
//   }
// }

// 优化思路，并发执行多个，如[1,2,3,4,5,6]
// 可以 同时执行 1+2 3+4 5+6
// async function sum(...rest) {
//   // 传的值少于2个，直接返回
//   if (rest.length <= 1) {
//     return rest[0] || 0;
//   }
//   const promises = [];
//   // 遍历数组里面的值两个两个的执行
//   for (let i = 0; i < rest.length; i += 2) {
//     promises.push(
//       new Promise((resolve) => {
//         // 如果 rest[i+1] 是 undefined ，说明数组长度是奇数，那么此时就是最后一个值
//         if (rest[i + 1] === undefined) {
//           resolve(rest[i]);
//         } else {
//           // 调用 asyncAdd 计算
//           asyncAdd(rest[i], rest[i + 1], (_, result) => {
//             resolve(result);
//           });
//         }
//       })
//     );
//   }
//   // 获取第一次执行计算的结果
//   const result = await Promise.all(promises);
//   // 将第一次获取到的值 [3,7,11] 再次传入 sum递归执行
//   return await sum(...result);
// }

async function sum(...rest) {
  let result = 0;
  const obj = {};
  obj.toString = function () {
    return result;
  };
  const promises = [];
  for (let num of rest) {
    promises.push(
      new Promise((resolve) => {
        asyncAdd(obj, num, (_, res) => {
          resolve(res);
        });
      }).then((res) => {
        result = res;
      })
    );
  }
  await Promise.all(promises);
  return result;
}

let start = window.performance.now();
sum(1, 2, 3, 4, 5, 6).then((res) => {
  // 请保证在调用sum方法之后, 返回结果21
  console.log(res);
  console.log(`程序执行共耗时: ${window.performance.now() - start}`);
});
