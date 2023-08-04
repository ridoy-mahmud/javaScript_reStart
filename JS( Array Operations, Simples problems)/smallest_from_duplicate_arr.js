let numbers = [34, 35, 76, 23, 65, 34, 6, 90, 76, 23];

function duplicateRemover(nums) {
    let duplicate = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (!duplicate.includes(element)) {
            duplicate.push(element);
        }
    }
    let item = duplicate;
    let smallest = item[0];
    for (let i = 0; i < item.length; i++) {
        const index = item[i];
        console.log(index);
        if (index < smallest) {
            smallest = index;
        }
    }
    return smallest;
}

let sortedUniqueNumbers = duplicateRemover(numbers);
console.log("The Smallest number of the array is - ", sortedUniqueNumbers);    
