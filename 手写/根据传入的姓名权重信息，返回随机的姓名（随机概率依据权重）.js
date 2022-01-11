/**
 * @description: 根据传入的姓名权重信息，返回随机的姓名（随机概率依据权重）
 * @param {Array} personValue
 * @returns {String} personName 姓名
 */
var getPersonName = function (personValue) {
  let sum = personValue.reduce((prev, cur) => {
    cur.start = prev;
    cur.end = cur.start + cur.weight;
    return cur.end;
  }, 0);
  let s = Math.random() * sum;
  let person = personValue.find((person) => person.start < s && s < person.end);
  return person.name;
};
const person = [
  {
    name: "张三",
    weight: 1,
  },
  {
    name: "李四",
    weight: 10,
  },
  {
    name: "王五",
    weight: 100,
  },
];
function getResult(count) {
  const res = {};
  for (let i = 0; i < count; i++) {
    const name = getPersonName(person);
    res[name] = res[name] ? res[name] + 1 : 1;
  }

  console.log(res);
}
getResult(10000);
