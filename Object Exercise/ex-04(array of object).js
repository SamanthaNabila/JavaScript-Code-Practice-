const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 25 },
];
users.forEach((user) => {
  console.log(user.name);
});

const midAge = users.filter((user) => user.age >= 25).map((user) => user.age);
console.log(midAge);

const sum = users.map((user) => user.age).reduce((accu, cuur) => accu + cuur);
console.log(sum);

const count = users.filter((item) => item.age !== undefined).length;
console.log(count);
const avg = sum / count;
console.log(avg);

//------------------------------------------------------------------------------------------------------
const employees = [
  { name: "Rahim", salary: 20000 },
  { name: "Karim", salary: 50000 },
  { name: "Jamal", salary: 30000 },
];
employees.forEach((employee) => {
  console.log(employee.salary);
});

const salaryMore = employees
  .filter((employee) => employee.salary > 20000)
  .map((employee) => employee.salary);
console.log(salaryMore);

const sumOfSalary = employees
  .map((employee) => employee.salary)
  .reduce((current, accumulator) => current + accumulator);
console.log(sumOfSalary);
//------------------------------------------------------------------------------------------------------
const myUsers = [
  { name: "A", isActive: true },
  { name: "B", isActive: false },
  { name: "C", isActive: true },
];
const active = myUsers.filter((myUser) => myUser.isActive);
console.log(active);
