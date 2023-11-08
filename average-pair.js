// add whatever parameters you deem necessary
function averagePair(nums, target) {
    // check for at least two numbers
    if (nums.length < 2) return false;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let average = (nums[left] + nums[right]) / 2;

        if (average === target) {
            return true;
        } else if (average > target) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

module.exports = averagePair;
