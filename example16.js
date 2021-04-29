//Given an array of numbers and a number. Find the index of a first element which is equal to that number.
//If there is not such a number, that find the index of the first element which is the closest to it.
const findIndex = (arr, num) => {
  let distanceNumOfEl = [];
  for (let i = 0; i < arr.length; i++) {
    distanceNumOfEl.push(Math.abs(num - arr[i]));
  }
  for (let i = 0; i < distanceNumOfEl.length; i++) {}
  let index = Math.min(...distanceNumOfEl);
  return distanceNumOfEl.indexOf(index);
};
findIndex([21, -9, 15, 2116, -71, 33], -71);
