function getSumOfEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let numbers = arr[i];
        if (arr[i] % 2 == 0) {
            sum = sum + numbers;

        }
    }
    return sum;
}


let arr = [73, 23, 13, 76, 98, 12, 54];
let result = getSumOfEven(arr);
console.log("The total sum of The EVEN numbers are - ", result);