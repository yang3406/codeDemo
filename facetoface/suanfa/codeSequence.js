
var Sequence = (code) => {
  var result = 0;
  for (var i = 0; i <= code.length - 1; i++) {
    var temp = code.charCodeAt(i) - 64;
    result += temp * Math.pow(26, code.length - 1 - i);
  }
  return result;
}

var codeNum = Sequence('A');
console.log(codeNum);
