const fetchWithLimit = (urls, max, callback) => {
  const length = urls.length;
  const result = [];
  let i = 0;
  let sum = 0;
  return new Promise((resolve, reject) => {
    while (i < max) {
      next();
    }
    function next() {
      const cur = i++;
      if (cur >= length) return;
      const url = urls[cur];
      fetch(url)
        .then((res) => {
          result[cur] = res;
          sum++;
          if (sum >= length) {
            resolve(result);
          } else {
            next();
          }
        })
        .catch(reject);
    }
  });
};

const fetchWithLimit = (urls, max) => {
  const length = urls.length;
  const result = [];
  let i = 0;
  let sum = 0;
  return new Promise((resolve, reject) => {
    if (i < max) {
      next();
    }
    function next() {
      const cur = i++;
      if (cur >= length) return;
      const url = arr[cur];
      fetch(url)
        .then((res) => {
          result[cur] = res;
          sum++;
          if (sum >= length) {
            resolve(result);
          } else {
            next();
          }
        })
        .catch(reject);
    }
  });
};

const fetchWithLimit = (urls, max) => {
  const length = urls.length;
  const result = [];
  let i = 0;
  let sum = 0;
  return new Promise((resolve, reject) => {
    if (i < max) {
      next();
    }
    function next() {
      const cur = i++;
      if (cur >= length) return;
      const url = urls[cur];
      fetch(url)
        .then((res) => {
          result[cur] = res;
          sum++;
          if (sum >= length) {
            resolve(result);
          } else {
            next();
          }
        })
        .catch(reject);
    }
  });
};

const fetchWithLimit = (urls, max) => {
  const length = urls.length;
  const result = [];
  let i = 0;
  let sum = 0;
  return new Promise((resolve, reject) => {
    if (i < max) {
      next();
    }

    function next() {
      const cur = i++;
      if (cur >= length) return;
      fetch(url)
        .then((res) => {
          result[cur] = res;
          sum++;
          if (sum >= length) {
            resolve(result);
          } else {
            next();
          }
        })
        .catch(reject);
    }
  });
};

const fetchWithLimit = (urls, max) => {
  const length = urls.length;
  const result = [];
  let i = 0;
  let sum = 0;
  return new Promise((resolve, reject) => {
    if (i < max) {
      next();
    }
    function next() {
      const cur = i;
      i++;
      if (cur >= length) return;
      const url = urls[cur];
      fetch(url)
        .then((res) => {
          result[cur] = res;
          sum++;
          if (sum >= length) {
            resolve(result);
          } else {
            next();
          }
        })
        .catch(reject);
    }
  });
};
