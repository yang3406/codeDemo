
//扩展运算符 ...  rest逆运算 主要用于函数调用
console.log(...[1, 2, 3]);

console.log(5, ...[1, 2, 3], 6);

let f = (x, y) => x + y;
let arr = [1, 2];
console.log(f(...arr));

//复制数组 
//es5 可以通过 concat
const a1 = [1, 2];
const a2 = a1.concat();
//es6
const arr1 = [3, 4];
const arr2 = [...arr1];

//合并数组  浅拷贝 就是对于引用类型的对象只是拷贝的引用 并没有生成新地址 如果改变 那么会影响到所有
//es5
let arrr3 = ["z", "b"];
let arrr4 = ["z", "b"];
var arr5 = arr3.concat(arr4);

//es6
var arr6 = ["k", "l"];
var arr7 = ["k", "l"];
var arr8 = [...arr6, ...arr7];

//字符串转数组
console.log(...'hello');

//Array.from() 方法用于将两类对象转为真正的数组:1:类似数组2:可遍历的数组 实际应用中 常见的类似数组的对象是DOM操作返回的nodelist集合,以及函数内部的arguments对象,Array.from 都可以把他们转为真正的数组
let arrayLike = {
  "0": "a",
  "1": "b",
  "2": "c",
  length: 3
}
//es5的写法
var arr1 = [].slice.call(arrayLike);
//es6的写法
let arr2 = Array.from(arrayLike);
console.log(arr1);
console.log(arr2);

//Array.of 把一组值,转为数组 主要是弥补Array()的不足,因为参数个数的不同,会导致Array()的行为有差异
console.log(Array.of(3, 8, 1));
console.log(Array.of(3)); //输出数组 [3]
console.log(Array(3));  //输出[,,,] 3为长度
console.log(Array(3, 1));  //输出[3,1] 3,1为数组值

//copyWithin() 始终操作当前数组 在当前函数内部 指定位置的成员复制到其他位置(会覆盖原有成员),返回当前数组.使用这个方法会改变当前数组接手三个参数 起始位置 

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 2));

//find 返回第一个符合条件的数组成员 没有返回undefined findIndex返回第一个符合条件的下标 没有返回-1
console.log([1, 2, 3, -5, -7].find((n) => n < 0)); //-5

//keys() values() entries()
for (let keys of ['a', 'b', 'c'].keys()) {
  console.log(keys);
}
//values 兼容性很差 会报错
for (let value of ['a', 'b', 'c'].values()) {
  console.log(value);
}

for (let [index, item] of ['a', 'b', 'c'].entries()) {
  console.log(index + "--" + "item");
}

//includes 返回一个数组是否包含某个特定的值 与字符串的includes差不多
console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(8));


//fill 方法使用给定值,填充一个数组
console.log(['a', 'b', 'c'].fill(7)); //[7,7,7]
console.log(new Array(5).fill(7)); //[7,7,7,7,7]
//接收三个参数
console.log([1, 2, 3].fill(7, 1, 2)); //[1,7,3] 1号开始到2号结束
//注意 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
let arr = new Array(3).fill({ name: "Mike" });
arr[0].name = "Ben";
console.log(arr); // [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]


let arr = new Array(3).fill([]);
arr[0].push(5);
console.log(arr);// [[5], [5], [5]]

//flat()将二位数组变为一维数组 返回一个新数组   flatMap()和map功能类型  返回一个新数组
console.log([1, 2, [3, [4, 5]]].flat());  //兼容性不好


