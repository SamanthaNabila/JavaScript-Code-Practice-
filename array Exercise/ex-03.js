//[2,4,6] → সব element double করো

const arr = [2, 3, 4];
const double = arr.map((element) => element * 2);
console.log(double);

// → sum বের করো
const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//সব element square করো
const squ = arr.map((element) => element * element);
console.log(squ);

// → sum বের করো

const arr = [2, 3, 4, 5, 6, 7, 8, 9];

const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);
