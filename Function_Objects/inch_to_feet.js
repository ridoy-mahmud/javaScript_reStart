function inchtoFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const inchesR = 144;
const dadaInch = inchtoFeet(inchesR);
console.log(dadaInch);

function milesToKm(miles) {
    const km = miles * 1.60934;
    return km;
}

const dadaMiles = 2;
const result = milesToKm(dadaMiles);
console.log(result);