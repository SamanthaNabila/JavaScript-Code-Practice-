function world() {
  console.log("hello");
}

world();
//--------------------------------
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));
//Default Parameter---------------------------------------

function greet(name = "guest") {
  console.log("hello " + name);
}
greet("nabila");

//Problem 1: Number Positive / Negative--------------------------
function number(value) {
  {
    return value > 0 ? "positive" : value < 0 ? "negative" : "zero";
  }
}
console.log(number(7));
//Problem 4: Grade System (Return)
function grade(mark) {
  return mark > 80
    ? "A+"
    : mark >= 60 && mark <= 79
      ? "B"
      : mark >= 40 && mark <= 59
        ? "c"
        : "fail";
}
console.log(grade(70));
//Problem 5: Largest Number (Return)------------------------
function LargeNum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(LargeNum(70, 80));
//FizzBuzz---------------------------------
function number(value) {
  return value % 3 === 0 && value % 5 === 0
    ? "FizzBuzz"
    : value % 3 === 0
      ? "Fizz"
      : value % 5 === 0
        ? "Buzz"
        : "No match";
}
console.log(number(5));
//Problem 10: Login System (Return) -----------------------------------
// function Login(username, pass) {
//   return username.length <= 0
//     ? "Enter User NAme"
//     : pass.length < 6
//       ? "Week Password"
//       : "log in success";
// }
// console.log(Login("", "jnv"));
//Alter NAtive and good way
function Login(username, pass) {
  let errors = [];
  if (username.length === 0) {
    errors.push("entetr User name");
  }
  if (pass.length < 6) {
    errors.push("Week password");
  }
  return errors.length > 0 ? errors : "Log in succesas";
}
console.log(Login("", "jc"));
