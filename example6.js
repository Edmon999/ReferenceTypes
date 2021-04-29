//. Find the sign of product of three numbers without multiplication operator. Display the specified sign.
let arr1 = [4, 7, -5];
let count = 0;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < 0) {
    count++;
  }
  if (arr1[i] === 0) {
    console.log("unsigned");
    break;
  }
  if (count % 2 === 0 && i === arr1.length - 1) {
    console.log("+");
  }
  if (count % 2 !== 0 && i === arr1.length - 1) {
    console.log("-");
  }
}
