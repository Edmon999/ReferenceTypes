let arr = [1, "10", "hi", 2, 3];
let numberCount = 0;
let stringCount = 0;
for (let el of arr) {
  if (typeof el === "number") {
    numberCount++;
  }
  if (typeof el === "string") {
    stringCount++;
  }
}
console.log(`numbers: ${numberCount} strings: ${stringCount}`);
