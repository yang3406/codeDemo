//声明父类
function SuperClass(id) {
  //引用类型共有属性
  this.books = ['javaScript', 'html'];
  //值类型共有属性
  this.id = id;
}
//父类声明原型方法
SuperClass.prototype.showBooks = function () {
  console.log(this.books);
}
//声明子类 
function SubClass(id, time) {
  //继承父类 call也被称为改变上下文环境
  SuperClass.call(this, id);
  this.time = time;
}
//继承父类 注意这里是把父类实例对象给子类原型
SubClass.prototype = new SuperClass();
//子类原型方法
SubClass.prototype.getTime = function () {
  console.log(this.time)
}

var sub1 = new SubClass();
sub1.showBooks();
sub1.books.push("java");
sub1.showBooks();

var sub2 = new SubClass();
sub2.showBooks();