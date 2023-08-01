let myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
};
let myObjKey = Object.keys(myObj);
console.log(myObjKey);
for (let i in myObjKey.cars) {
    console.log(myObjKey[i]);
    let carkey = (myObjKey[i]);
    for (let j in carkey.cars) {
        console.log(carkey[j]);
    }
}