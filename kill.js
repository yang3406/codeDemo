var arrt = [1, 2, 3, 4, 5];
var obj = {};
for (var i = 0; i < arrt.length; i++) {
  console.log(obj);
  var k = handle(arrt[i], obj);
  obj.child = k;
}

function handle(item, newObj) {
  newObj.child = item;
  return newObj;
}
console.log(obj);