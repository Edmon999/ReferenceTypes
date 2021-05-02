// Enter a number. Find the difference between its biggest and smallest digits.
let num = 45262;
num = num.toString().split("");
let result = Math.max(...num) - Math.min(...num);
console.log(result);

//// Convert base-2 number to base-10
const convertNum = (num) => parseInt(num, 2);
convertNum(0101011);

//// Takes two arrays and insert the second array in the middle of the first array. The first array always has
/// two elements.
const insertArr = (arr1, arr2) => {
  arr2.unshift(arr1[0]);
  arr2.push(arr1[1]);
  return arr2;
};
insertArr([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);

///Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1 )
//
const fact = (n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};
