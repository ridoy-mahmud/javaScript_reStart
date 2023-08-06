function mindGame(number) {
    let mul = 3 * number;
    let sum = mul + 10;
    let sub = sum / 2;
    let diff = sub - 5;
    return diff;
};

let res = mindGame(14);
console.log(res);