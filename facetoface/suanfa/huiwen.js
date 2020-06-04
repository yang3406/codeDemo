function huiwen(str) {
  var reg = new RegExp('[^a-zA-Z0-9]', 'gmi');
  var reuslutStr = str.replace(reg, '').toLowerCase();
  return reuslutStr === reuslutStr.split("").reverse().join("");
}

var str = "A man, a plan, a canal: Panamak";

var d = huiwen(str);

console.log(d);