// Given an array of a size smallerthan 100. It consists of numbers from 0 to 99 in any order. Create a new
// array where each element from that array is placed underthe index of its value. Start from the smallest
// value and end with the biggest one. If there are missing values, put in its places undefined.
let arr = [4, 3, 0, 9];
let newArr = [];
newArr.length = Math.max(...arr) + 1;
for (let i = Math.min(...arr); i < newArr.length; i++) {
  newArr[i] = "undefined";
  for (let j = 0; j < arr.length; j++) {
    if (i === arr[j]) {
      newArr[i] = arr[j];
    }
  }
}
console.log(newArr.slice(Math.min(...arr)));
