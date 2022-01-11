// ES7 中的装饰器
// 在ES7中，我们可以像写python一样通过一个@语法糖来轻松地给一个类装上装饰器
// function classDecorator(target) {
//   target.hasDecorator = true;
//   return target;
// }

// // 将装饰器「安装」到Button类上
// @classDecorator
// class Button {
//   constructor() {
//     console.log("button");
//   }
// }
// console.log("Button 是否被装饰了：", Button.hasDecorator);

// 也可以用同样的语法糖去装饰类里面的方法
// function funcDecorator(target, name, descriptor) {
//   let originalMethod = descriptor.value;
//   descriptor.value = function() {
//     console.log("我是Func的装饰器逻辑");
//     return originalMethod.apply(this, arguments);
//   };
//   return descriptor;
// }

// class Button {
//   @funcDecorator
//   onClick() {
//     console.log("我是Func的原有逻辑");
//   }
// }

// const button = new Button();
// button.onClick();

// 装饰器语法糖
// Part1：函数传参&调用
// 之前我们使用ES6实现装饰器模式时，曾经将按钮实例传给了Decorator，以便于后续Decorator可以对它进行逻辑的拓展。这也正是装饰器的最最基本的操作————定义装饰器函数，将被装饰者“交给”装饰器。这也正是装饰器语法糖首先帮我们做掉的工作————函数传参&调用
function classDecorator(target) {
  target.hasDecorator = true;
  return target;
}

@classDecorator
class Button {}
