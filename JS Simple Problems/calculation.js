function isLGSeven(number) {
    let item = number - 7;
    if (item <= 7) {
        return item;
    }
    else {
        let res = item * 2;
        return res;
    }
}

const num = 54;
const result = isLGSeven(num);
console.log(result);