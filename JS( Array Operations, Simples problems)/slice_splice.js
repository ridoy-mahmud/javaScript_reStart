const array1 = [45, 23, 6, 676, 13, 3, 58, 32, 22, 44];

console.log("The Sliced array -", array1.slice(0, 3));
console.log("Array 1 after sliced -", array1);

const array2 = [67, 128, 45, 23, 6, 676, 13, 3, 58, 32, 22, 44];

const res = array2.splice(1, 9, 43, 623, 420);
console.log("The splised array - ", res);
console.log("Array 2 after spliced with new added items -", array2);