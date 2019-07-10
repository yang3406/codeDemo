var someValue = "abc";
var strLength: number = someValue.length;

console.log(someValue);

type possibleType = string | number;

function getLength(params: possibleType): void {
  console.log(params.length);
}