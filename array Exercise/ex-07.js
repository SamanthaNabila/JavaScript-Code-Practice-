const arr = [2, 3, 6, 6, 5];

const largest = arr.reduce((value, current) =>
  value > current ? value : current,
);
const secondLargest = arr
  .filter((value) => value !== largest)

  .reduce((value, current) => (value > current ? value : current));
console.log(secondLargest);

// function getSecondLargest(arr) {
//     const largest = arr.reduce((value, current) =>
//         value > current ? value : current
//     );

//     const secondLargest = arr
//         .filter(value => value !== largest)
//         .reduce((value, current) =>
//             value > current ? value : current
//         );

//     return secondLargest;
// }
