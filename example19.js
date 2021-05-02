// Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.
let arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
  newArr.push(sum);
}
console.log(newArr);
