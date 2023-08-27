function updatePhoneTotal(newPhoneNumber) {
    let tatalPrice = newPhoneNumber * 1219;
    let itemCost = document.getElementById("item1_cost");
    itemCost.innerText = tatalPrice;
};
document.getElementById("phone1_plus").addEventListener("click", function () {
    let newPhoneNumber = numberTotal(true, "phone1_value");
    updatePhoneTotal(newPhoneNumber);
    getSubtotalByid();
});
document.getElementById("phone1_min").addEventListener("click", function () {
    let newPhoneNumber = numberTotal(false, "phone1_value");
    updatePhoneTotal(newPhoneNumber);
    getSubtotalByid();
});