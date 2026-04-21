//  [10,4,8,1,6] → সবচেয়ে ছোট সংখ্যা বের করো

const arr = [10, 4, 8, -1, 6];
const min = Math.min(...arr);
console.log(min);

const arr = [10, 4, 8, 1, 6];
const min = arr.reduce((accu, current) => (accu < current ? accu : current));
console.log(min);

//even number বের করো
const arr = [10, 3, 5, 7, 4, 8, 1, 6];
function evenFunction(value) {
  return value % 2 == 0;
}
const evenNum = arr.filter(evenFunction);
console.log(evenNum);

//odd number বের করো with sorting

const arr = [10, 3, 5, 7, 4, 8, 1, 6];
function oddFunction(value) {
  return value % 2 !== 0;
}
const oddNum = arr.filter(oddFunction);
const sortedOdd = oddNum.sort((a, b) => a - b);

console.log(sortedOdd);

//Find Number

const number = arr.find((element) => element === 4);
console.log(number);

if (arr.includes(4)) {
  console.log(4);
}
