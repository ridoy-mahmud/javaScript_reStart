let list = [
    { name: "Xiaomi", ram: 8, camera: "64 MP", price: 20000 },
    { name: "Realme", ram: 6, camera: "48 MP", price: 3000 },
    { name: "Apple", ram: 8, camera: "64 MP", price: 890000 },
    { name: "HTC", ram: 4, camera: "48 MP", price: 45000 },
    { name: "Samsung", ram: 12, camera: "200 MP", price: 2405000 },
];

function higerPrice(item) {
    let list = item[0];
    for (let i = 0; i < item.length; i++) {
        let element = (item[i]);
        if (element.price > list.price) {
            list = element;
        }
    }
    return list;
}

const res = higerPrice(list);
console.log("-------------- The Device Description --------------");
console.log("Device Name - ", res.name);
console.log("Total RAM - ", res.ram, "GB");
console.log("Camera Model - ", res.camera);
console.log("Price is - ", res.price, "Taka");