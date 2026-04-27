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

async function run() {
  try {
    const num1 = await checkNum(12);
    const num2 = await checkEven(num1);
    const result = await double(num2);
    console.log("Final Result:", result);
  } catch (error) {
    console.log("error:", error);
  }
}
run();
