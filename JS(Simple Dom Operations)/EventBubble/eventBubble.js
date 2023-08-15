let cout = console.log.bind();

// Add Input Element in A list
document.getElementById('add_button').addEventListener("click", function () {
    const element = document.getElementById("input_text").value;
    // If The Element is Blank The it will add nothing
    if (!element || element.length === 0) {
        return;
    }
    const addText = document.getElementById('text_container');
    let ul = document.createElement("li");
    ul.innerText = element;
    addText.appendChild(ul);
    let item = document.getElementById('input_text');
    item.value = "";
});

// Remove an Element form a list by Event Bubling Method
document.getElementById("text_container").addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);

});