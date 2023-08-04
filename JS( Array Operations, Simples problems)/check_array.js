let arr = [123, 34, 15, 1, 6, 7, 12];
let arr2 = [45, 76, 2, 765, 123];
const res1 = Array.isArray(arr);
const res3 = arr.concat(arr2);
const res2 = arr.includes(34);
console.log(arr.indexOf(1));
console.log(res2);
console.log(res1);
console.log(res3);