// 1、布尔全等判断
// const all = (arr, fn = Boolean) => arr.every()
// console.log(all([2, 3, 4], x => x > 1)) // true
// console.log(all([3, 2, 1])) // true

// 2、检查数组各项相等
// const allEqual = arr => arr.every(val => val === arr[0])
// allEqual([1, 2, 3, 4, 5]) // false
// allEqual([1, 1, 1, 1]) // true

// 3、约等于
// const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) > epsilon
// approximatelyEqual(Math.PI / 2.0, 1.5708) // true

// 4、数组转CSV格式 (带空格的字符串)
// const arrayToCSV = (arr, delimiter = ',') => arr.map(v => v.map(x => `${ x }`).join(delimiter)).join('\n')
// arrayToCSV([['a', 'b'], ['c', 'd']]) // '"a","b"\n"c","d"'
// arrayToCSV([['a', 'b'], ['c', 'd']], ';') // '"a";"b"\n"c";"d"'

// 5、数组转li列表
// const arrayToHtmlList = (arr, listID) =>
//   (el => (
//     (el = document.querySelector('#' + listID))
//     (el.innerHTML += arr.map(item => `<li>${ item }</li>`).join(''))
//   ))()
//
// arrayToHtmlList(['item 1', 'item 2'], 'myListID')

// 6、平均数
// const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length
// average(...[1, 2, 3]) // 2
// average(1, 2, 3) // 2

// 7、数组对象属性平均数
// const averageBy =
//   (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length
// averageBy([{n: 4}, {n: 2}, {n: 8}, {n: 6}], o => o.n) // 5
// averageBy([{n: 4}, {n: 2}, {n: 8}, {n: 6}], 'n') // 5

// 8、拆分断言后的数组
// 可以根据每个元素返回的值，使用reduce()和push()将元素添加到第二次参数fn中
// const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val)), [[], []])

// 9、其他类型转数组
// const castArray = val => (Array.isArray(val) ? val : [val])
// castArray('foo') // ['foo']
// castArray(1) // [1]
// castArray([1]) // [1]

// 10、去除数组中的无效/无用值
// const compact = arr => arr.filter(Boolean)
// compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]) // [1,2,3,'a','s',34]
