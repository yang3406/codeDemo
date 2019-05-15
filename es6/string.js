/* 字符串方法大全  提升效率的关键 在于基础方法 */

/* indexOf  获取一个字符串是否包含在另一个字符串中 返回-1 或 其他下标 */
var str1 = "come from china";
var index = str1.indexOf("from");
console.log(index);


/**
 * es6 includes startsWith endsWith
  */
/*includes()：返回布尔值，表示是否找到了参数字符串。
 startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
 endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。 */
var str2 = "hello world";
console.log(str2.includes("llo"));
console.log(str2.startsWith("hello"));
console.log(str2.endsWith("world"));

//repeat 重复多少次
var str3 = "bili";
console.log(str3.repeat(3));

/**
 *  字符串模板  用反引号(`) 1前面的符号键标识
 * */
console.log(`this is a parent 1
  and 2`);

//字符串嵌入变量
let obj1 = { name: 'yjs', age: '18' };
console.log(`my name is ${obj1.name},age is ${obj1.age}`);
//字符串模板表示多行的 空格和换行 都会被保留 用trim方法可以消除
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);
//trim()消除
$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());
//大括号 里面不仅可以是变量 还可以为运算 和调用函数
let x = 1;
let y = 2;
console.log(`${x + y}`);

function fn() {
  return "Hello World";
}
console.log(`foo ${fn()} bar`);