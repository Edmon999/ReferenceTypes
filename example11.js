// . Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
// print the quotient, otherwise print the remainder.
let num1 = 0;
num1 = num1.toString().split("");
var sum = 0;
var mult = 1;
for (let i = 0; i < num1.length; i++) {
  sum += +num1[i];
  mult *= +num1[i];
}
let dif = mult / sum;
if (mult % sum === 0) {
  console.log(`Quotient is ${dif}`);
} else if (mult + sum === 0) {
  console.log("cant calculate");
} else {
  console.log(`reminder is ${mult % sum}`);
}
