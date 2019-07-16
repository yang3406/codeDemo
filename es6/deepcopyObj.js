var obja = {
  name: 'yyy',
  obj: {
    title: "you nmae",
    price: "66"
  }
}

//assign 只能复制基本类型的 对于对象 还是引用
var objb = Object.assign({}, obja);
objb.name = "suusu";
objb.obj.title = "this is older";
console.log(obja);


var objc = {
  name: 'yyy',
  obj: {
    title: "you nmae",
    price: "66"
  }
}
//有很多的限制 对某些值不能复制 如"" undefined symbold等
var objd = JSON.parse(JSON.stringify(objc));
objd.name = "kkkk";
objd.obj.title = "zzy";
console.log(objd)

/* 
*  写个兼容方法  兼容对象
*/

function isObj(params) {
  return typeof params == "object" && params != null;
}

function copyObj(params) {
  if (!isObj(params)) return params;
  var target = Array.isArray(params) ? [] : {};
  for (var key in params) {
    //去掉原型链上的属性
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      if (isObj(params[key])) {
        target[key] = copyObj(params[key]);
      } else {
        target[key] = params[key];
      }
    }
  }
  return target;
}
var obje = {
  name: 'yyy',
  obj: {
    title: "you nmae",
    price: "66",
    kArrL: [1, 2, 3, 4, { obj: "werwer" }]
  }
}
var ll = copyObj(obje);

console.dir(ll);
