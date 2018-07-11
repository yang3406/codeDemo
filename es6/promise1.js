
function asyncPromise(params) {
  return new Promise((resolve, reject) => {
    //resolve(100);
  })
}
asyncPromise().then(() => {
  console.log("resolve111");
}).catch(() => {
  console.log("resolve222");
})
