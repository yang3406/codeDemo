var P1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("p11111");
  }, 1000);
});

var P2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("p222222");
  }, 5000);

});

/* Promise.all([P2, P1]).then((p1) => {
  console.log(...p1);
}) */

Promise.race([P2, P1]).then((p1) => {
  console.log(p1);
})