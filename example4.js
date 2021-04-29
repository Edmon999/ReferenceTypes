let num = 215;
let answer = `${num}  is a multiple of`;
if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
  console.log(`${num}  is a multiple of 3, 5 and 7.`);
} else {
  if (num % 3 === 0) {
    answer += " 3 ";
  }
  if (num % 5 === 0) {
    answer += " 5";
  }
  if (num % 7 === 0) {
    answer += " and 7 ";
  }
  console.log(answer);
}
