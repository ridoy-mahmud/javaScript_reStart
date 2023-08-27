function caseTotal(newCase) {
    let theNumberOfcase = newCase;
    let totalCost = theNumberOfcase * 59;
    let inPutTheCase = document.getElementById("caseTotal");
    inPutTheCase.innerText = totalCost;
};
document.getElementById("casePlus").addEventListener("click", function () {
    let caseNumber = numberTotal(true, "caseInput");
    caseTotal(caseNumber);
    getSubtotalByid();
});
document.getElementById("caseMin").addEventListener("click", function () {
    let caseNumber = numberTotal(false, "caseInput");
    caseTotal(caseNumber);
    getSubtotalByid();
});