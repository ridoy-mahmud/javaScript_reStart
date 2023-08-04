const shoppingCart = [
    { name: "Shirt", price: 1200, quantity: 5 },
    { name: "Pant", price: 900, quantity: 3 },
    { name: "Shoe", price: 1400, quantity: 5 },
    { name: "Belt", price: 600, quantity: 2 },
    { name: "Hoodie", price: 1800, quantity: 1 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log("Total cost = ", expense);