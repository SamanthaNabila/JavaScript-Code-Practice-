//{ a:1, b:2, c:3 } → সব keys বের করো
//সব values বের করো
//keys + values loop করে print করো

const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let keys in obj) {
  //   console.log(keys);
  //   console.log(obj[keys]);
  console.log(keys, ":", obj[keys]);
}
