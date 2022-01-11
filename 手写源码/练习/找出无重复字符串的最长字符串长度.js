function strLen(str) {
  let result = 1
  let noRepeatStr = ''
  let len = str.length
  for (let i = 0; i < len; i++) {
    // 获取字符串当前的字符
    let specStr = str.charAt(i)
    // 判断当前存储的是否已经有了该字符
    let index = noRepeatStr.indexOf(specStr)

    if (index === -1) {
      noRepeatStr = noRepeatStr + specStr
      result = result < noRepeatStr.length ? noRepeatStr.length : result
    } else {
      noRepeatStr = noRepeatStr.substr(index + 1) + specStr
    }
  }
  return result
}
