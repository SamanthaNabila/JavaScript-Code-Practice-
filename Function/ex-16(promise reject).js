//Problem 3: Condition Check
function checkNum(value) {
  return new Promise((resolve, reject) => {
    if (value % 2 === 0) {
      resolve("EVEN");
    } else {
      reject("odd");
    }
  });
}
checkNum(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//Problem 7: Reject Case
function checkValue(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      reject("value is too small");
    } else {
      resolve("Good");
    }
  });
}
checkValue(5).then(console.log).catch(console.log);
