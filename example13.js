// Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
// in a separate array. Arrange them such as from the beginning are the odds and from the ending the
// evens.
let arr = [8, 8, "meh", 6];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    newArr.push(arr[i]);
  }
}
let evenArr = [];
let oddArr = [];
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] % 2 !== 0) {
    oddArr.push(newArr[i]);
  } else {
    evenArr.push(newArr[i]);
  }
}
let lastArr = oddArr.concat(evenArr);
console.log(lastArr);
