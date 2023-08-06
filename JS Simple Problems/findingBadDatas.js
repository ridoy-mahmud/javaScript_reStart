function findingBadData(arr) {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        let elememt = arr[i];
        if (elememt < 0) {
            sum.push(elememt);
        }
    }
    const negative = sum;
    console.log(negative);
    return negative.length;
}

let num = [43, 65, -5, 23, -56, 65, -9, 0, 3, -34, 65, -23, -65];
let res = findingBadData(num);
console.log("Number of Negative elements are =", res);