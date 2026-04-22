//uppercase করো

const arr = ["apple", "banana", "mango"];
const uppArr = arr.map((item) => item.toUpperCase());
console.log(uppArr);

//["cat","elephant","dog","tiger"] → 3 এর বেশি length word বের করো

const arr = ["cat", "elephant", "dog", "tiger"];
const three = arr.filter((value) => value.length > 3);
console.log(three);

//13.	"I love coding" → array তে convert করো

// const string = "I love coding";
// const arr = string.split("");
const arr = Array.from(string);
// const arr = [...string];
console.log(arr);

//13.	"I love coding" → string তে convert করো
const arr = ["I", " ", "l", "o", "v", "e", " ", "c", "o", "d", "i", "n", "g"];
const str = arr.join("");
// const str = arr.toString();
console.log(str);
