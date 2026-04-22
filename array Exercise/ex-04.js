//•  [2,6,3,8,1] → 5 এর বেশি number বের করো

const arr = [2, 6, 3, 8, 1, 5];

const number = arr.filter((value) => value > 5);
console.log(number);

const number = arr.find((value) => value > 5);
console.log(number);

const number = arr.find((value) => value === 5);
console.log(number);

//•  [1,3,7,4,6] → প্রথম even number খুঁজে বের করো
const arr = [1, 3, 7, 4, 6];
const even = arr.find((value) => value % 2 === 0);
console.log(even);

//কয়টা even number আছে

const even = arr.filter((value) => value % 2 === 0);
console.log(even.length);
