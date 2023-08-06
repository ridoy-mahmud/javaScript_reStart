function evenOdd(str) {
    let element = str.length;
    console.log("Number of elements is -", element);
    if (element % 2 == 0) {
        let res = ("Even Number");
        return res;
    }
    else {
        let res2 = ("Odd Nmber");
        return res2;
    }
}

const res = evenOdd("Amar Name Ridoy ");
console.log(res);