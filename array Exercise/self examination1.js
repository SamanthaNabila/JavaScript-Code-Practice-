//[1,2,3,4,5] → সব number কে string এ convert করো

const arr = [1, 2, 3, 4, 5];
const str = arr.toString();
console.log(str);
console.log(typeof str);

//["10","20","30"] → number এ convert করো

const arr = ["10", "20", "30"];
const num = arr.map(Number);
console.log(num);

//[5,10,15,20] → 10 এর বেশি number count করো
const arr = [5, 10, 15, 20];
const result = arr.filter((value) => value > 10);
console.log(result);

//[1,2,3,4,5] → সব element এর cube বের করো
const arr = [1, 2, 3, 4, 5];
const result = arr.map((element) => element * element * element);
console.log(result);

//[7,8,9] → সব number এর সাথে 5 যোগ করো
const arr = [7, 8, 9];
const result = arr.map((element) => element + 5);
console.log(result);

//[1,2,3,4] → odd number গুলোর sum বের করো

const arr = [1, 2, 3, 4, 5, 7, 9, 8, 4, 3, 2, 1];
const odd = arr
  .filter((value) => value % 2 !== 0)
  .reduce((accu, curr) => accu + curr);
console.log(odd);

//[2,4,6,8] → সবগুলো কি > 1 check করো
const arr = [2, 4, 6, 8];
const large = arr.every((value) => value > 1);
console.log(large);

//[1,2,3,4,5] → 3 আছে কিনা check করো
const arr = [1, 2, 3, 4, 5];
const three = arr.some((value) => value === 3);
console.log(three);

//[10,20,30,40] → last element বের করো
const arr = [10, 20, 30, 40];
const last = arr[arr.length - 1];
console.log(last);
//first element remove করো
const arr = [10, 20, 30, 40];
arr.shift();
console.log(arr);
