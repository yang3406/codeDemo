var countTime = 0;
var isHappyData = false;
var onceObj = {};
var interPowData = (num) => {
  var reg = /^\d+$/;
  if (!reg.test(num)) return;
  if (onceObj[num.toString()]) return;
  onceObj[num.toString()] = 'exit';
  if (num == 1) {
    isHappyData = true;
    return;
  }
  var powerNum = 0;
  var strNum = num.toString();
  countTime++;
  for (var i = 0; i < strNum.length; i++) {
    powerNum += Math.pow(strNum.charAt(i), 2);
  }
  interPowData(Number(powerNum));
}

interPowData(18);
console.log(isHappyData);