
/* 
  一:var 1为函数作用域 2变量声明会做函数里面提示到最前面 并没有赋值为undefined  3:在同一个作用域允许多次声明 4:在顶级声明的变量 加入了window.
  二:let 1为块级作用域 2声明不会提升,存在暂时性死区(在块级作用域,在声明let变量前使用它都会报错,不管外面上级是否声明它) 
   3:在相同作用域不允许多次声明同一个变量 4:在顶级声明的变量 没有加入window
  三:const 1声明只读的常量,声明和赋值在一起(只声明,不赋值会报错),不允许修改其地址，常用大写字母作为变量。 2:声明不会提升,存在暂时性死区 3:在相同作用域不允许重复声明
  感觉const和let除了声明和赋值在一起,不能修改值 其他的特性都差不多
  注意:const是不允许修改其内存地址,而不是值,对于简单类型的变量,值为其内存地址.对于复合类型的数据(数组,对象),保存的为其指针,其结构是可以变的.
  为保存不变,可以用Object.freeze()
**/

//暂时性死区 let不允许多次声明
var kill = "kill";
if (true) {
  console.log(typeof kill); //kill is not defined
  //console.log(kill);  //kill is not defined
  let kill = "boo";
  var kill = "pppp";  //Identifier 'kill' has already been declared
}

//for循环中 let index变量在每次循环时 都会重新声明 js引擎内部会记住它上一次循环的值
let arr = [];
for (let index = 0; index < 5; index++) {
  arr[index] = function () {
    console.log(index);
  }
}
console.log(index);
arr[3]();

//let for循环的index 和 函数内部index作用域不同 
for (let index = 0; index < 3; index++) {
  let index = "ccc";
  console.log("ccc")
}
console.log(w)
var w = "123";

//const
const PI = 13.14;
if (true) {
  const PI = 12.34;
  console.log(PI); //12.34
  PI = 1;  // Assignment to constant variable.
}

//不会报错 const声明的对象 地址没变 操作的是引用指针
const CONOBJ = { a: 1, b: 2 };
CONOBJ.a = 2;
console.log(CONOBJ);

//const 声明的对象和数据都不可以改变
{
  var constObjArr = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
      if (obj[key] instanceof Array || obj[key] instanceof Object) {
        constObjArr(obj[key])
      }
    })
  }

  const CONSTOBJ = { a: 1, b: { c: 2 } };
  constObjArr(CONSTOBJ);
  CONSTOBJ.a = 2;
  CONSTOBJ.b.c = 9999;
  console.log(CONSTOBJ); // 不报错 值没变{ a: 1, b: { c: 2 } }
}