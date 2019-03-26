//递归 基线条件(结束条件)  递归条件(循环条件)
//调用栈  

let robj = { 'pid': "", "cid": true, child: [], "id": "r", "name": "我是第一个" };

let obj = [
  { 'pid': "r", "cid": true, child: [], "id": "sys", "name": "我是系统" },
  { 'pid': "r", "cid": true, child: [], "id": "fun", "name": "我是功能" },
  { 'pid': "sys", "cid": false, child: [], "id": "systow", "name": "我是系统第一个" },
  { 'pid': "sys", "cid": false, child: [], "id": "systow", "name": "我是系统第二个" },
  { 'pid': "sys", "cid": false, child: [], "id": "systhird", "name": "我是系统第三个" },
  { 'pid': "sys", "cid": false, child: [], "id": "sysfour", "name": "我是系统第四个" },
  { 'pid': "fun", "cid": false, child: [], "id": "funtow", "name": "我功能第一个" },
  { 'pid': "fun", "cid": false, child: [], "id": "funtow", "name": "我功能第二个" },
  { 'pid': "fun", "cid": false, child: [], "id": "funthird", "name": "我功能第三个" },
  { 'pid': "fun", "cid": true, child: [], "id": "funfour", "name": "我是功能四个" },
  { 'pid': "funfour", "cid": true, child: [], "id": "www", "name": "我是功能二级" },
];

let temRootObj = Object.assign(robj);
function factorial(arr, pobj) {
  let pid = pobj.id;
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    if (obj.pid == pid) {
      pobj.child.push(obj);
      //temparr.child.push(robj);
      if (obj.cid) {
        factorial(arr, obj);
      }
    }
  }
  return pobj;
}

console.dir(factorial(obj, temRootObj))