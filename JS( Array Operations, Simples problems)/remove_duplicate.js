let friends = ["Istiak", "Lemon", "Alif", "Sazzad", "Sumon", "Milon", "Lemon", "Alif", "Sumon", "Milon", "Lemon"];

function removeDuplicate(uniques) {
    let unique = [];
    for (let i = 0; i < uniques.length; i++) {
        const name = uniques[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;

}
const result = removeDuplicate(friends);
console.log(result);