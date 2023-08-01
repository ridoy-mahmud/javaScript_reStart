let info = {
  name: "Mahamudul Hasan",
  id: 69,
  designation: "Student",
  phone: +8801752039405,
  email: "ridoymahmud678@gmail.com",
};
let mobile = {
  brand: "Realme",
  price: 22000,
  camera: "48MP",
  processor: "SD710",
  ram: "8GB",
};

console.log("Mobile er dam = ", mobile.price, "Taka");
console.log("Processor hoccha = ", mobile.processor);
console.log("Owner er name = ", info.name);

let properties = Object.keys(info);

console.log(properties);
