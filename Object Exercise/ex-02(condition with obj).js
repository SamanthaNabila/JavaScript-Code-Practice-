const user = {
  name: "nabila",
  isActive: false,
  age: 17,
  password: "nabila",
  amount: 400,
};
function checkUser() {
  if (user.isActive) {
    return "Active User";
  } else {
    return "Inactive";
  }
}
const result = checkUser(user);
console.log(result);
//-----------------------------------------
const userAdult = { name: "Nabila", age: 25 };
function checkAudult(userAdult) {
  return userAdult.age >= 18 ? "adult" : "Minor";
}

const Adult = { name: "Nabila", age: 36, value: 25 };
console.log(checkAudult(userAdult));
console.log(checkAudult(user));
console.log(checkAudult(Adult));
//-----------------------------------------
const obj = { value: 26 };
function checkEven(obj) {
  return obj.value % 2 === 0 ? "Even" : "odd";
}
console.log(checkEven(obj));
console.log(checkEven(Adult));
//-----------------------------------------
const product = { stock: 0 };
function checkStock(product) {
  return product.stock > 0 ? "In Stock" : "Out of stock";
}
console.log(checkStock(product));
//-----------------------------------------
function checkPassword(user) {
  return user.password.length < 9 ? "week" : "strong";
}
console.log(checkPassword(user));
//-----------------------------------------
function checkFreeShipping(user) {
  return user.amount > 500 ? "free" : "Charge Applicable";
}
console.log(checkFreeShipping(user));
