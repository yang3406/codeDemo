

/* 结构赋值 模式匹配(左右两边的结构保持一致) */
//注意 右边为数组  结构赋值用于数组  下标保持一致 就可以取到对应的值
let [a, b, c] = [1, 2, 3];
console.log(a);  //1

let [m, [g, h]] = [1, [4, 5]];
console.log(g); //4

let [, , k] = [6, 7, 8];
console.log(k); //8

let [q, ...l, k] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(q); //1
console.log(l);//[2, 3, 4, 5, 6, 7, 8]
console.log(k);//[9]

//如果解构 不成功 变量的值为undefined
let [foo] = [];
let [bar, ll] = [333];
console.log(foo + "===" + ll); // undefined===undefined

//当右边不为数组时 严格来说为 不为Interator(遍历)结构时 报错
var [bill] = "hello"; //字符串为Interator结构
console.log(bill);   // h

//不为Interator(遍历)结构时 报错
{
  var [foo] = 1;
  /*  let [foo] = false;
   let [foo] = NaN;
   let [foo] = undefined;
   let [foo] = null;
   let [foo] = {a:1}; */
  //单个执行上面的语句
  console.log(su); //foo is not iterable
}

//给默认值 记住是否给默认值 在es6是严格判断(===)是否为undefined
{
  [koo = "kkk"] = [];
  console.log(koo); //kkk

  [xoo = "kkk"] = [null];
  console.log(xoo); //null

  //赋默认值 如果是执行函数 为懒执行 有需要才执行
  function matchValue() {
    //1不为undefined 不会执行这个
    console.log("11111");
    return "bbbb";
  }

  [moo = matchValue()] = [1]
  console.log(moo);
}

/* ------------------用于对象------------------- */
//解构赋值 用于对象 key值保证一样才能取到值 对象的属性没有次序
{
  let { ofoo, obar } = { ofoo: "2222", okill: "44444" }
  console.log(ofoo); //2222
  console.log(obar); //后排对应的为okill所以输出 undefined

  //模式和 值的区别 作为key的为模式 如p  是取不到值的  可以在重新定义一次
  let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };

  /* let { p: [x, { y }] } = obj;
  console.log(p);   //p is not defined */

  //在嵌套模式下 子对象所在的父属性不存在 会报错  [m, { n }] }的父属性为p
  //let { we, we: [m, { n }] } = obj; 
  //必须用p 是用key去取值的
  let { p, p: [x, { n }] } = obj;
  console.log(p);

  /* 用于对象默认值  同样要严格等于3才行*/
  let { x = 3 } = { x: undefined };
  console.log(x); //3

  /* 如果要将一个已经声明的变量用于解构赋值，必须非常小心 */
  let x;
  // 错误的写法  {x}把他解析为一个代码块
  //{ x } = { x: 1 }; // SyntaxError: syntax error
  //正确写法
  ({ x } = { x: 1 });

}




