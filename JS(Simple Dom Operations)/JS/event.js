
document.getElementById('clickChange').addEventListener('click', function () {
    let element = document.getElementById("text_update");
    element.innerText = "lorem ipsum set amet (text has been updated)";
});

document.getElementById('text_update2').addEventListener('click', function () {
    let inputFiled = document.getElementById('get_text');
    console.log(inputFiled.value);
    let element = document.getElementById('default_text');
    element.innerText = inputFiled.value;
    inputFiled.value = "";
});

document.getElementById('post_comment').addEventListener("click", function () {
    const element = document.getElementById('text_areA');
    const newElement = element.value;
    console.log(newElement);
    let commnet_container = document.getElementById('commnet_container');
    console.log(commnet_container);
    let p = document.createElement("p");
    p.innerText = newElement;
    commnet_container.appendChild(p);
    element.value = "";
});