let num = 63;
let count = 0;
for (let i = 2; i < Math.round(num / 2); i++) {
  if (num % i === 0) {
    count++;
  }
}
if (count > 0) {
  console.log("No");
} else {
  console.log("yes");
}
