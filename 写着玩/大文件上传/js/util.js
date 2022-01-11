function formatFileName(filename) {
  const dotIndex = filename.lastIndexOf('.'),
    name = filename.substring(0, dotIndex),
    suffix = filename.substring(dotIndex + 1)
  const hash = md5(filename) + new Date().getTime()
  return {
    hash,
    suffix,
    filename: `${filename}.${suffix}`
  }
}
