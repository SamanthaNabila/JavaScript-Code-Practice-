function checkNum(num) {
  return new Promise((resolve, reject) => {
    if (num >= 10) {
      resolve(num);
    } else {
      reject("condition fail at first step");
    }
  });
}
function checkEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(num);
    } else {
      reject("condition fail at second step");
    }
  });
}
function double(num) {
  return new Promise((resolve) => {
    resolve(num * 2);
  });
}
checkNum(11).then(checkEven).then(double).then(console.log).catch(console.log);
