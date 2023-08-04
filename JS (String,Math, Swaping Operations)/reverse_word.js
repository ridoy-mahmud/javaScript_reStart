function reverseWord(text) {
    let word = text.split(' ');
    let result = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        result.push(element);
    }
    const reversed = result.join(" ");
    return reversed;

}

let text = "Ami Mahamaudul Hasan Ridoy";
let result = reverseWord(text);
console.log(result);