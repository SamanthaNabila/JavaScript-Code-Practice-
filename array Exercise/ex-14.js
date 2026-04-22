//[2,3,4] → multiplication বের করো

const arr = [2, 3, 4];
const multiplication = arr.reduce(
  (accumulator, current) => accumulator * current,
);
console.log(multiplication);

//[1,2,3,4,5] → average বের করো
const array = [1, 2, 3, 4, 5];
const average = arr.reduce(
  (accumulator, current) => (accumulator + current) / 2,
);
console.log(average);
