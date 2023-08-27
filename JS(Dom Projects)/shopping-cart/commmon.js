function numberTotal(isInput, element) {
    let caseInput = document.getElementById(element);
    let newCaseInput = parseInt(caseInput.value);
    let result;
    if (isInput === true) {
        result = newCaseInput + 1;
    }
    else {
        result = newCaseInput - 1;
    }
    caseInput.value = result;
    if (result != 0 && result >= 1) {
        return result;
    }
    else {
        return 0;
    }
};
// Set element
function setElementById(elementID, value) {
    const setTotal = document.getElementById(elementID);
    setTotal.innerText = value;
};
// Total
function currentTotal(element) {
    let previousTotal = document.getElementById(element);
    let currentTotal = parseInt(previousTotal.innerText);
    return currentTotal;
}
function getSubtotalByid() {
    // Sub Total
    let phoneTotalAmount = currentTotal("item1_cost");
    let caseTotalAmount = currentTotal("caseTotal");
    let currentSubTotal = phoneTotalAmount + caseTotalAmount;
    setElementById("subTotal", currentSubTotal);
    // Total Tax
    let taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    let taxAmount = parseFloat(taxAmountString);
    setElementById("tax", taxAmount);
    // Grand Total
    let finalAmount = currentSubTotal + taxAmount;
    setElementById("total", finalAmount);
}