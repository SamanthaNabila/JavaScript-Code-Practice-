//[3,7,8,2] → প্রথম even number এর index বের করো

const arr = [3, 7, 8, 2];
const even = arr.findIndex((value) => value % 2 === 0);
const index = console.log(even);

//[5,9,12,7] → প্রথম number > 10 খুঁজে বের করো

const array = [5, 9, 12, 7];
const findNumber = array.find((value) => value > 10);
console.log(findNumber);
