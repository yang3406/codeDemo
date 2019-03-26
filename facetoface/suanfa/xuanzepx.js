//选择排序  循环数组 然后用数组第一个值和后面的比值 找出最大/最小的值 返回下标 在从原来数组中排除这个值  循环数组个数次 就能排序 
//数据为同一类型 init 和double类型
//flag 为true 为增长排序 false为递减排序
function findmin(temparr, flag) {
  let min_index = 0, min_val = temparr[0];
  for (let index = 1; index < temparr.length; index++) {
    const element = temparr[index];
    if (flag) {
      if (element < min_val) {
        min_index = index;
        min_val = element;
      }
    } else {
      if (element > min_val) {
        min_index = index;
        min_val = element;
      }
    }
  }
  return min_index;
}

function quicksort(arr, flag) {
  var sortarr = [];
  var copy_arr = arr.concat([]);
  arr.forEach(element => {
    let r_index = findmin(copy_arr, flag);
    let temp = copy_arr.splice(r_index, 1);
    sortarr.push(temp[0]);
  });
  return sortarr;
}

var data = [2, 3, 4, 9, 43, 12, 343, 454, 65, 9];

console.log(quicksort(data, true));