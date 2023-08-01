let roast_given = 0;
while (roast_given <= 5) {
    console.log("Roast Den Bhai , Nen Bhai - ", roast_given);
    if (roast_given >= 3) {
        break;
    }
    roast_given++;
}
console.log(" ");
console.log(" ");
const numbers = [54, 87, 23, 54, 43, 93];
for (i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    // console.log(number);
    if (number < 50) {
        continue;
    }
    console.log(number);
}
