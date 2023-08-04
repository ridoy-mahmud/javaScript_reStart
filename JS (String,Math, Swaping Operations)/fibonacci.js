// fibo series = 0 , 1, 1, 2, 3, 5, 8, 13, 21
// fibo n = fibo(n-1) + fibo(n-2);

function fibonacci(number) {
    const fibo = [0, 1];

    for (i = 2; i <= number; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    const numbers = fibo;
    console.log("The fibonacci series is - ", numbers);
    console.log(' ');
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
        let element = numbers[j];
        sum = sum + element;
    }
    return sum;
}
let item = 10;
let result = fibonacci(item);
console.log("The total sum of the fibonacci series form", item, " is -", result);