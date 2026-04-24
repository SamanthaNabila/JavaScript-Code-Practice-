function Accont(name, balance) {
  this.name = name;
  this.balance = balance;
  this.deposit = function (amount) {
    return this.balance + amount;
  };
  this.withdraw = function (amount) {
    return this.balance - amount;
  };
  this.checkBalance = function () {
    return this.balance;
  };
}
const acc1 = new Accont("nabila", 1000);
console.log(acc1.deposit(300));
console.log(acc1.withdraw(600));
console.log(acc1.checkBalance());
