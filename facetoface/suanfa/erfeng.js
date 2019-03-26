
/* 二分法的首要原则 有序的排列  用Math.floor((start + end) / 2)的值去比较 */
function erfeng(target, list) {
  var start = 0;
  var end = list.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (list[mid] == target) {
      return "查的下标为" + mid;
    } else if (list[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return "不包含您输入的数字";
}
var faultarr = [1, 2, 4, 5, 12, 16, 23, 28, 30, 34];
console.log(erfeng(23, faultarr));
