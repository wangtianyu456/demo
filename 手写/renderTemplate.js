let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let person = {
  name: "布兰",
  age: 12,
  sex: "男",
};

function renderTemplate(template, data) {
  const reg = /\{\{(\w+)\}\}/g;
  return template.replace(reg, (...args) => {
    const variable = args[1];
    return data[variable];
  });
}

const data = renderTemplate(template, person);
console.log(data);
