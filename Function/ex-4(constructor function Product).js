function Product(name, price) {
  this.name = name;
  this.price = price;
  this.getDiscount = function () {
    return this.price - (this.price * 10) / 100;
  };
  this.totalPrice = function (quantity) {
    return this.price * quantity;
  };
}

const p1 = new Product("book", 100);
console.log(p1.getDiscount());
console.log(p1.totalPrice(10));
