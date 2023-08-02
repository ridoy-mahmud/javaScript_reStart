function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
}
sumOfNumbers(7);

function factorialOfNumbers(num) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res = res * i;
        console.log("The Factorial of", i, "is -", res);
    }
}
factorialOfNumbers(6);

// Reverse Factorial

function reverseFactorial(num) {
    let res = 1;
    let i = num;
    while (i >= 1) {
        console.log(i, res = res * i);
        i--;
    }
}
reverseFactorial(6);

