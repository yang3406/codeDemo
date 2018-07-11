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
    console.log("BBBB2");
    setTimeout(() => {
      resolve("BBBB5555");
    }, 200);
  });
};

function C(res) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(res + "CCCC");
      let type = 2;
      if (type === 1) {
        resolve(res + "CCC");
      } else {
        reject({ code: 1001, messasge: '你错了' })
      }
    }, 100);
  });
};

function D(res) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(res + "DDDDD");
      resolve();
    }, 100);
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

B().then(res => {
  return C();
}).then(res => {
  console.log(res + "kkkkk");
  return D(res);
}).catch(res => {
  console.log(res.messasge);
});
