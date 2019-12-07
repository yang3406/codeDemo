/* *
*  函数防抖:在时间被触发m秒后在执行回调,如果在这n内又被触发,则重新计时
*setTimeout 每次都返回一个 特定的id
* 用处 search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
* window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
*  https://juejin.im/post/5b8de829f265da43623c4261
* 函数防抖是某一段时间内只执行一次，而函数节流是间隔时间执行。
*/
window.onload = function () {
  /* 这是不妨抖的 */
  const nodebounce = document.getElementById("nodebounce");

  function ajax(content) {
    console.log("我是不防抖的" + content);
  }

  nodebounce.addEventListener("keyup", function () {
    var val = nodebounce.value;
    ajax(val);
  })

  /* 这是防抖的 */
  const debounce = document.getElementById("debounce");
  function noajxa(content) {
    console.log("我是防抖的" + content);
  }

  function fndebounce(fn, timer = 1000) {
    return function (args) {
      console.log(fn.id);
      let _this = this;
      let _args = args;
      clearTimeout(fn.id);
      console.log(fn.id);

      fn.id = setTimeout(() => {  //setTimeout返回特定id
        fn.call(_this, _args);
      }, timer);
    }
  }

  let proxyfn = fndebounce(noajxa, 800);

  debounce.addEventListener("keyup", function (e) {
    proxyfn(e.target.value);
  })


  /* 函数节流 */
  /* *
  *规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
  * 用处  
  * 鼠标不断点击触发，mousedown(单位时间内只触发一次)
  *监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
  *  */

  function throttle(fn, delay) {
    let last, deferTimer
    return function (args) {
      let that = this
      let _args = arguments
      let now = +new Date()
      if (last && now < last + delay) {
        clearTimeout(deferTimer)
        deferTimer = setTimeout(function () {
          last = now
          fn.apply(that, _args)
        }, delay)
      } else {
        last = now
        fn.apply(that, _args)
      }
    }
  }

  let throttleAjax = throttle(ajax, 1000)

  let inputc = document.getElementById('throttle')
  inputc.addEventListener('keyup', function (e) {
    throttleAjax(e.target.value)
  })
}