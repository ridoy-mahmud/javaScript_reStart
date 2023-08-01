let mobile = {
  brand: "Realme",
  price: 22000,
  camera: "48MP",
  processor: "SD710",
  ram: "8GB",
};
let keys = Object.keys(mobile);
console.log(keys);
for (let i = 0; i < keys.length; i++) {
  let propertyName = keys[i];
  let propertyValue = mobile[propertyName];
  console.log(propertyName, "    -   ", propertyValue);
}
