
/* es5 给形参默认值 */

function setDefault(x, y) {
  console.log(typeof y === 'undefined'); //没有实参的 typeof 为'undefined'
  y = y || "world";
  console.log(x + y);
}
setDefault("hello"); //正常输出
setDefault("hello", false); //不正常输出
setDefault("hello", ""); //不正常输出  可以 用typeof y === 'undefined' ? 进行判断在赋值

/* es6 给默认值 */
function setES6Default(x, y = "world") {
  console.log(x + y);
}
setES6Default("hello"); //正常输出
setES6Default("hello", false);
setES6Default("hello", "");
setES6Default("hello", "undefined");

function add(...arg) { //arg 变为了数组
  let i = 0, sum = 0;
  for (i of arg) {
    sum += i;
  }
  console.log(sum);
}
add(1, 2, 3);


function addsome(a, ...arg) { //a 为第一个值 arg 变为了数组  不能在...arg在跟参数 例如(...arg,b);这会报错
  let i = 0, sum = 0;
  for (i of arg) {
    sum += i;
  }
  console.log(sum);
}
addsome("tt", 1, 2, 3);

//箭头函数 传一个参 所有的箭头函数都是匿名函数
var f = v => v;
//等同于
var f = function (v) {
  return v;
}

//箭头 如果不需要参数 或者多个参数
var f = () => 5
var f = (num1, num2) => num1 + num2

//如果函数的代码块的部分多余一条语句 要用大括号括起来 并使用return返回
var sum = (num1, num2) => { if (num1 != 0) { return num1 + num2 } }

//出错的地方 返回对象时 {}为代码块 会被执行 不会返回 
let getTemp = id => { id: id };
//正确返回
let getTemp = id => ({ id: id });

//箭头函数的作用 1:表达简洁
const isEvent = x => x % 2 == 0;
//2 简化回调函数
[1, 2, 3].map(x => x * x);

/* ------------箭头函数需要注意的地方---------- */
// 1:函数体内的this对象,就是定义时所在的对象,而不是使用时所在的对象
// 2:不可以当做构造函数 也就是说 不可以使用newe命令,否则会报错
// 3:不可以使用argumenets对象,该函数在函数体内不存在,如果要用 可以用rest参数代替
//4 不可以使用yield命令，因此箭头函数不能用作Generator函数

/*  尤其要注意第一点 this对象的指向是可变的 但是在箭头函数中是固定的 不能用settimeout改变*/
function foo(params) {
  setTimeout(() => {
    console.log("id:" + this.id);
  }, 100);
}
var id = 21;
foo.call({ id: 88 });
//setTimeout的第一个参数是箭头函数,这个箭头函数的定义生效是在foo函数生成时,而真正的指向在100ms后,普通函数,指向this为全局的window,应该输出21。但是箭头函数导致this总是**指向函数定义生效时所在的对象**,所有输出88

//this指向的固化,并不是箭头函数内部有绑定this的机制,实际是箭头函数根本没有自己的this,导致内部的this就是外部代码块的this,正式没有this,所以不能用于构造函数

// 作用域分为:运行时作用域和绑定定义时的作用域 普通函数为运行时作用域,箭头函数为绑定定义时作用域