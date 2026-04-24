function Person(name, age, status) {
  this.name = name;
  this.age = age;
  this.isActive = status;

  this.getInfo = function () {
    return "Name: " + this.name + ", Age: " + this.age + " city: " + this.city;
  };
  this.updateAge = function (newAge) {
    this.age = newAge;
  };
  this.greeting = function () {
    return "Hello, my name is " + this.name;
  };
  this.adult = function () {
    return this.age >= 18 ? "Adult" : "Minor";
  };
  this.check = function () {
    return this.isActive ? "Active" : "Inactive";
  };
}

const person1 = new Person("nabila", 25, true);
//Add Property
// person1.city = "Dhaka";
// console.log(person1.getInfo());
// person1.updateAge(10);
// console.log(person1.age);
// console.log(person1.greeting());
// console.log(person1.adult());
// console.log(person1.check());
const person2 = new Person("sabila", 15, true);
const person3 = new Person("kabila", 35, false);
const arr = [person1, person2, person3];

// const ageArray = [person1.age, person2.age, person3.age];
// console.log(ageArray);

const adult = arr.filter((value) => value.age >= 30);
const user = arr.find((value) => value.name === "kabila");
console.log(user);
console.log(arr);
console.log(adult);
