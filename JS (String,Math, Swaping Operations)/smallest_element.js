function smallestElement(nums) {
    let smllest = nums[0];
    for (let i in nums) {
        const element = nums[i];
        if (element < smllest) {
            smllest = element;
        }
    }
    return smllest;
}

const nums = [34, 23, 45, 12, 87, 12, 9, 23, 656, 23];
const result = smallestElement(nums);
console.log(result);