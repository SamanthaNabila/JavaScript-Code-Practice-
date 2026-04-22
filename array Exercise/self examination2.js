//even number গুলো double করো

// const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8];
// const result = arr.filter((value) => value % 2 === 0).map((value) => value * 2);
// console.log(result);

//max number find করো (reduce দিয়ে)
// const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8];
// const max = arr.reduce((accu, current) => (accu > current ? accu : current));
// console.log(max);

//factorial style multiplication (2×3×4)

// const arr = [1, 2, 3, 4];
// const max = arr.reduce((accu, current) => accu * current);
// console.log(max);

//duplicate remove করো

// const arr = [1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 3, 7, 8];
// const unique = [...new Set(arr)];
// console.log(unique);

//[10,20,30] → সব number string বানিয়ে join করো
const arr = [10, 20, 30];
const str = arr.join("");

console.log(str);
