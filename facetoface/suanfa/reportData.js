// 报数 1 被读作 "one 1" ("一个一") , 即 11。 11 被读作 "two 1s" ("两个一"）, 即 21。 21 被读作 "one 2","one 1"（"一个二", "一个一"), 即 1211

function countAndSay(n) {
  if (n === 1) return '1';
  var preResult = countAndSay(n - 1);
  return preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
}

function countAndSay2(n) {
  let preResult = '1';
  for (var i = 1; i < n; i++) {
    preResult = preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  console.log(preResult);
}
countAndSay(4);