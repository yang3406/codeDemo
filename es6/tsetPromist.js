var promise = new Promise(function (resolve, reject) {
  resolve();
  console.log('Promise');
});

promise.then(function () {
  console.log('resolved');
})
console.log("say hi");