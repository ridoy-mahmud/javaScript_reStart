let first = 5;
let second = 7;

console.log(first, second);
const temp = first;

first = second;
second = temp;
console.log(first, second);

let third = 76;
let forth = 23;


// This is Called Destructering
console.log(third, forth);
[third, forth] = [forth, third];
console.log(third, forth);