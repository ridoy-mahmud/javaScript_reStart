const firstHundred = 100;
const secondHundred = 80;
const restPrice = 70;

function totalPrice(price) {
    if (price <= 100) {
        const totalQuantity = price;
        const totalCost1 = totalQuantity * firstHundred;
        return totalCost1;
    }
    else if (price > 100 && price <= 200) {
        const totalQuantity = price;
        const costForFirstHundred = totalQuantity * firstHundred;
        const afterHundred = (200 - totalQuantity) * secondHundred;
        const totalCost = costForFirstHundred + afterHundred;
        return totalCost;
    }
    else {
        const tatalQunatity = price;
        const costFirstHundred = tatalQunatity * 100;
        const costSecondHundred = tatalQunatity * 100;
        const costThirdHundred = (tatalQunatity - 200) * restPrice;
        const grandTotal = costFirstHundred + costSecondHundred + costThirdHundred;
        return grandTotal;
    }
}

let nitDiscount = totalPrice(201);
console.log(nitDiscount);