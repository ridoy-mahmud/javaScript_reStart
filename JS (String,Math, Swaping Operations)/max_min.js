const jim = 84;
const bella = 75;
const chinku = 94;
if (jim > bella) {
    console.log("Jim will get the cake");
}
else {
    console.log("Bella will get the cake");
}
const maxi = Math.max(jim, bella, chinku);
console.log(maxi);


function largerNum(nums) {
    let leargest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element > leargest) {
            leargest = element;
        }
    }
    return leargest;
}

const nums = [34, 98, 675, 12, 56, 1, 8];
let rez = largerNum(nums);
console.log(rez);
