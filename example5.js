// . Given three numbers. Sort them by the ascending order.
// 1
const sort = () => {
  let arr = [4, 8, 28, 79, 0, 145, 7622, 2];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let num = arr[j];
        arr[j] = arr[i];
        arr[i] = num;
      }
    }
  }
  return arr;
};
// 2
let arr = [7, 1, 9];
arr.sort((a, b) => a - b);
