function Person() {
  getAge = function() {
    console.log(10);
  };
  return this;
}

Person.prototype.getAge = function() {
  console.log(30);
};

Person.getAge = function() {
  console.log(20);
};

var getAge = function() {
  console.log(40);
};

function getAge() {
  console.log(50);
}

Person.getAge();
getAge();
new Person().getAge();
getAge();
new Person().getAge();

console.log(typeof a);
function a() {}
var a;
console.log(typeof a);
