// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
//theirlengths.
let arr = ["anymore", "raven", "me", "communicate"];
let arrLengths = [];
for (let i = 0; i < arr.length; i++) {
  arrLengths.push(arr[i].length);
}
let min = Math.max(...arrLengths);
let max = Math.min(...arrLengths);
console.log(min + max);
