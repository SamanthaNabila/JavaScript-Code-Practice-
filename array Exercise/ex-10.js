//[1,3,5,6] → কোনো even number আছে?

const arr = [1, 3, 5, 6];
const evenNum = arr.some((value) => value % 2 === 0);
console.log(evenNum);

//[2,4,6,8] → সবগুলো কি even?
const array = [2, 4, 6, 8];
const evenNumber = array.every((value) => value % 2 === 0);
console.log(evenNumber);
