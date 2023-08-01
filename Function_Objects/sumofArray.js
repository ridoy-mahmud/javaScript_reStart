let sum = 0;
function getSumOfArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        let numbers = (arr[i]);
        sum = sum + numbers;
    }
    return sum;
}
let arr = [73, 23, 13, 76, 98, 12, 54];
let result = getSumOfArray(arr);
console.log("The total sum of numbers are - ", result);