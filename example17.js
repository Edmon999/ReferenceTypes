// Given a sentence as a string. Split it according to space and comma and create an array consisting of the
// words of the array. The last word should not contain the last . or! .
let str = "May the Force be with you.";
str = str.slice(0, str.length - 1).split(" ");
console.log(str);
