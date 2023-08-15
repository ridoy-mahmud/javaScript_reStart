document.getElementById('confirm_del').addEventListener("keyup", function (event) {
    const text = event.target.value;
    console.log(text);
    const deleteBtn = document.getElementById("delete_btn");
    if (text == "delete") {
        deleteBtn.removeAttribute("disabled");
    }
    else {
        deleteBtn.setAttribute("disabled", true);
    }

})
document.getElementById("delete_btn").addEventListener("click", function () {
    const element = document.getElementById("item_del");
    element.style.display = "none";
    const element2 = document.getElementById("confirm_del");
    element2.value = "";
})