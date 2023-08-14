
// Simple ways to get in Event and Add Listner //

// Way 1
function myButton() {
    let element = document.getElementById('boxText');
    console.log(element);
    element.style.backgroundColor = "pink";
    e
}
// Way 2
const dontCliclk = document.getElementById('btn2');
dontCliclk.onclick = function makeColor() {
    document.getElementById('boxText').style.backgroundColor = "#98FB98";

}
// Way 3 
const letsClick = document.getElementById("btn3");
letsClick.addEventListener("click", function clickMe() {
    document.getElementById('boxText').style.backgroundColor = "#FFDAB9";
})

// Way 4 We Gonna use it Mostly
document.getElementById("btn4").addEventListener('click', function clickKor() {
    document.getElementById('boxText').style.backgroundColor = "#F0FFFF";
})