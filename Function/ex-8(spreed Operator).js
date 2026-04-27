const arr = [1, 2, 3, 4, 5];
const arr1 = [...arr, 5, 6];
console.log(arr1);
//Problem 2: Merge Arrays
const a = [1, 2];
const b = [3, 4];
const arr2 = [...a, ...b];
console.log(arr2);

//Problem 4: Copy Object
const user = { name: "Rahim", age: 25 };
user.country = "bangladert";
const user1 = { ...user, city: "kushtia" };
console.log(user);
console.log(user1);
const user9 = { ...user, name: "kusia" };
console.log(user9);
//Problem 7: Override Value
const d = { name: "A", age: 20 };
const e = { age: 30 };
const marge = { ...d, ...e };
console.log(marge);
//Problem 9: Spread in Function Call
const arr9 = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...arr9));
//Problem 15: Nested Object Copy (Tricky)
const Person = {
  name: "nabila",
  age: 25,
  city: {
    Division: "Dhaka",
    area: "dhanmondi",
  },
};
const nested = { ...Person.city, house: "adabor" };
console.log(nested);
console.log(Person);
