let num1 = 43;
let num2 = 65;
let res = num1 + num2;
console.log(res);
let quatity = num1 * num2;
console.log(quatity);

// Perse Int Converts the float or String number into a integer number

let number1 = 3.2999998657;
let res2 = parseInt(number1);
let res3 = parseFloat(number1);
console.log(res2);
console.log(res3);

// Limit The number of digit we want to Show with ToFixed Function

let res4 = number1.toFixed(3);
res4 = parseFloat(res4);
console.log(res4);
console.log(typeof res4);