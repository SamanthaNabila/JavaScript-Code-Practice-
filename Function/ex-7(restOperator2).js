//Problem 9: Student Marks
function Student(name, ...marks) {
  return marks.reduce((total, num) => total + num);
}
console.log(Student("nabila", 1, 2, 3, 4, 5));

//Problem 10: Shopping Cart
function Product(name, ...price) {
  return price.reduce((total, value) => total + value);
}
console.log(Product("facewash", 2, 3, 4, 5));

//Problem 11: Filter Odd using Rest
function Odd(...num) {
  return num.filter((value) => value % 2 !== 0);
}
console.log(Odd(1, 2, 3, 4, 5, 6, 7, 8, 9));
//Problem 12: Average Calculator
function Average(...number) {
  return number.reduce((total, value) => (total + value) / number.length);
}
console.log(Average(1, 2, 3, 4, 5, 6, 7, 8));
//Problem 13: Custom Logger
function Customer(message, ...data) {
  console.log(message);
  console.log(data);
}
Customer("Hi,How can I help you", "nabila", "dhanmondi", "9/A");
