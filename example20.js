// Print the following pattern:
// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15
let m = 5;
for (let i = 1; i <= m; i++) {
  let num = i;
  let d = m - 1;
  for (let j = 0; j < i; j++) {
    console.log(`${num}`);
    num += d;
    --d;
  }
}
