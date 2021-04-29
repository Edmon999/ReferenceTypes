// Insert a digit and a number. Check whetherthe digits contains in the number or not.
const check = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num2.includes(num1)) {
    console.log("yes");
  } else {
    console.log("no");
  }
};
check(9, 24551);
