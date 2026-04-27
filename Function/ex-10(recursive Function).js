//Problem 1: Print Numbers

function printNum(n) {
  if (n === 1) {
    console.log(1);
    return;
  }

  printNum(n - 1);
  console.log(n);
}
printNum(5);

//Problem 2: Sum of Numbers
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(5));
//Problem 3: Factorial
function Factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * Factorial(n - 1);
}
console.log(Factorial(6));

function printNum(n) {
  if (n === 1) {
    console.log(1);
    return;
  }
  console.log(n);
  printNum(n - 1);
}
printNum(5);
//Level 3: String Recursion
//Problem 7: Reverse String
function stringReverse(n) {
  if (n === "") {
    return "";
  }
  return stringReverse(n.slice(1)) + n[0];
}
console.log(stringReverse("hello"));

//Problem 8: Count Vowels
function vowel(str) {
  if (str === "") {
    return "";
  }
  if ("aeiou".includes(str[0])) {
    return str[0] + vowel(str.slice(1));
  } else {
    return vowel(str.slice(1));
  }
}
const result = vowel("hello");
console.log(result.length);

//Problem 9: Palindrome Check
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("madam"));
