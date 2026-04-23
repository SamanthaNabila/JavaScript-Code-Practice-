const obj = {
  name: "Rahim",
  address: { city: "Dhaka", zip: 1200 },
};
console.log(obj.address.city);
obj.address.zip = 1100;
console.log(obj.address.zip);
