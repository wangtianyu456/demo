function ajax(options) {
  options = Object.assign({}, {
    url: '',
    method: 'POST',
    data: null,
    headers: {}
  }, options)
  const { url, method, data, headers } = options
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest;
    xhr.open(method, url)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (/^(2|3)\d{2}}$/ig.test(xhr.status)) {
          resolve(xhr.responseText)
        } else {
          reject(xhr)
        }
      }
    }
    xhr.send(data)
  })
}
