function reverseString(text) {
    let rev = "";
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        rev += element;
        console.log(element);
    }
    return rev;
}

let text = "imuT uhdnob alak ihkap ima onej ik";
let res = reverseString(text);
console.log(res);