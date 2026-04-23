const obj = {
  name: "a",
  marks: 80,
  grade: "a+",
};

for (let key in obj) {
  console.log(key, ":", obj[key]);
}
const count = Object.keys(obj).length;
console.log(count);
