let products = {
    name: "Asus X556UQK",
    price: 50000,
    cpu: "Intle Core i5",
    gpu: "Nvdia 940MX",
    id: 900206
};
let productKey = Object.keys(products);
console.log(productKey);
console.log(" ");
console.log("Here is The description of My Working Device - ")
for (let i = 0; i < productKey.length; i++) {
    let productName = (productKey[i]);
    let productValue = products[productName];
    console.log(productName, " - ", productValue)
}
console.log(" ");
console.log(" ");

for (let x in productKey) {
    let productName2 = productKey[x];
    let productValue2 = products[productName2];
    console.log(productName2, " = ", productValue2);
}

