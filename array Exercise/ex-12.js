//[10,20,30,40,50] → index 1-3 slice করো
const arr = [10, 20, 30, 40, 50];
const New = arr.slice(1, 3);
console.log(New);

//[1,2,3,4] → index 2 থেকে 1টা remove করো
const array = [1, 2, 3, 4];
array.splice(2, 1);
console.log(array);

//[1,2,3] → index 1 এ 100 insert করো

const arra = [1, 2, 3];
arra.splice(1, 0, 100);
console.log(arra);
