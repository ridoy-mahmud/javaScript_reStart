function gemsToDiamond(person1, person2, person3) {
    let res1 = person1 * 21;
    let res2 = person2 * 32;
    let res3 = person3 * 15;

    let total = res1 + res2 + res3;
    console.log(total);
    if (total > 2000) {
        let item1 = total - 2000;
        return item1;
    }
    else {
        return total;
    }
}

const person1 = 45;
const person2 = 23;
const person3 = 24;
const result = gemsToDiamond(person1, person2, person3);
console.log(result);
