function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      B().then(res => {
        console.log("AAA" + res);
        resolve(res);
      });
    }, 200);
  });
};

function B(res) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("BBBB2");
      if (true) {
        resolve("BBBB5555");
      }
      else {
        reject({ code: 1001, messasge: 'B你错了' });
      }
    }, 100);
  });
};

function C(res) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let type = 1;
      if (type === 1) {
        console.log(res + "CCCC1111");
        resolve(res + "CCC");
      } else {
        console.log(res + "CCCC2222");
        reject({ code: 1001, messasge: 'C你错了' })
      }
    }, 200);
  });
};

function D(res) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(res + "DDDDD");
      resolve();
    }, 300);
  });
};

/* A().then(res => {
  C(res);
}).then(res => {
  B()
}) */
/* A().then(res => {
  console.log(res);
}); */

/* B().then(res => {
  return C();
}).then(res => {
  console.log(res + "kkkkk");
  return D(res);
}).catch(res => {
  console.log(res.messasge);
}); */

Promise.all([B(), C(), D()]).then(res => {
  console.log(res[0] + "100000")
  console.log(res[1] + "200000")
  console.log(res[2] + "300000")
}).catch(err => {
  console.log(err.messasge + "=error");
})
