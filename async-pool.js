async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];
  const executing = [];
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);
  }
}

// const timeout = (i) =>
//   new Promise((resolve) => setTimeout(() => resolve(i), i));
// async function run() {
//   const data = await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
//   console.log(data);
// }

// run();
