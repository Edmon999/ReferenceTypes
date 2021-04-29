// Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the
// last digit of the inserted numberis 0, numberremains the same.
let num = 85301002;
if (num % 10 === 0) {
  console.log(num);
} else {
  let newNum = (num % 10).toString();
  num = Math.floor(num / 10).toString();
  newNum += num;
  console.log(newNum);
}
