function sumAll(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumAll(1, 2, 3));
//Alternative

function plusAll(...number) {
  return number.reduce((total, num) => total + num, 0);
}
console.log(plusAll(1, 2, 3, 4));

//Problem 2: Multiply All
function multiAll(...value) {
  return value.reduce((multiple, value) => multiple * value);
}
console.log(multiAll(1, 2, 3, 4));
//Problem 3: Count Even Numbers
function even(...nums) {
  return nums.filter((nums) => nums % 2 === 0);
}

console.log(even(1, 2, 3, 4, 5, 6, 7, 8, 9).length);
//Problem 4: Find Max
function max(...num) {
  return num.reduce((accu, cuur) => (accu > cuur ? accu : cuur));
}
console.log(max(1, 2, 3, 4, 5, 6, 7, 8));

//Level 3: Array + Rest
//Problem 5: First & Rest
const arr = [1, 2, 3, 4, 5];

const [first, ...rest] = arr;
console.log(...rest);
//Problem 6: Skip First Two

const arr1 = [1, 2, 3, 4, 5];
const [a, b, ...rast] = arr1;
console.log(...rast);

//Level 4: Object + Rest
//Problem 7: Extract Property

const obj = {
  name: "nabila",
  Age: 25,
  city: "Dhaka",
};
const { name, ...others } = obj;
console.log(others);

//Problem 8: Remove Password
const user = {
  name: "a",
  age: 3,
  city: "c",
  password: "hygvdfyh",
};
const { password, ...all } = user;
console.log(all);
