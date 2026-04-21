//[3,7,2,9,5] → সবচেয়ে বড় সংখ্যা বের করো

// const arr = [3, 7, 2, 9, 5];
// let max = Math.max(...arr);
// console.log(max);

//OR

const arr = [3, 7, 2, 9, 5];
const max = arr.reduce((accumulator, current) =>
  current > accumulator ? current : accumulator,
);
console.log(max);
