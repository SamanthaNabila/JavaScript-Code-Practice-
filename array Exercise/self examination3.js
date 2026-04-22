//[1,2,3,4,5,6] → even → double → sum
const arr1 = [1, 2, 3, 4, 5, 6];
const double = arr1
  .filter((value) => value % 2 === 0)
  .map((value) => value * 2)
  .reduce((accumulator, current) => accumulator + current);
console.log(double);

//["apple","banana","kiwi","mango"] → বড় word → uppercase

const arr2 = ["apple", "banana", "kiwi", "mango"];
const largeWord = arr2.reduce((a, b) => (a.length > b.length ? a : b));
console.log(largeWord.toUpperCase());

//[5,10,15,20] → সব number /5 → তারপর sum
const arr3 = [5, 10, 15, 20];
const sum = arr3.map((value) => value / 5).reduce((accu, curr) => accu + curr);
console.log(sum);

//[1,2,3,4,5] → শুধু prime number বের করো
const arr4 = [1, 2, 3, 4, 5];

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const prime = arr4.filter(isPrime);
console.log(prime);
