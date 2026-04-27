//Problem 10: Fibonacci

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(8));

//Problem 11: Power Function
function base(i, j) {
  if (i <= 0) return Infinity;
  if (j === 0) return 1;

  return i * base(i, j - 1);
}
console.log(base(2, 3));

//Problem 12: Sum of Digits
