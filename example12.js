// Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
// from the array.
var newStr = "";
var str1 = "If at _ you donʼt _, try, try _.";
let j = 0;
let arr = ["first", "succeed", "again"];
str1 = str1.split("");
for (let i = 0; i < str1.length; i++) {
  if (str1[i] === "_") {
    newStr += arr[j];
    ++j;
  } else {
    newStr += str1[i];
  }
}
console.log(newStr);
