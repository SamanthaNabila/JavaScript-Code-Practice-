//[1,2] + [3,4] → combine করো

const arr1 = [1, 2];
const arr2 = [3, 4];

// const result = arr1.concat(arr2);
// console.log(result);

const result = [...arr1, ...arr2];
console.log(result);

//[1,[2,3],[4,5]] → flatten করো
const arr = [1, [2, 3], [4, 5]];
console.log(arr.flat());
