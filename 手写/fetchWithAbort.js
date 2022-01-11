function fetchWithAbort(fetch) {
  let abort = null;
  const abortPromise = new Promise((resolve, reject) => {
    abort = () => {
      reject();
    };
  });
  let promiseWithAbort = Promise.race([abortPromise, fetch]);
  promiseWithAbort.abort = abort;
  return promiseWithAbort;
}

const fetchWithAbort = (fetch) => {
  let abort;
  let newPromise = new Promise((resolve, reject) => {
    abort = () => {
      reject();
    };
  });
  let fetchPromise = Promise.race([fetch, newPromise]);
  fetchPromise.abort = abort;
  return fetchPromise;
};
