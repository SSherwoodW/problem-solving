// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const numCount = {};
    let count = 0;

    for (const num of arr) {
        let complement = target - num;

        if (numCount[complement]) {
            count++;
        }
        numCount[num] = (numCount[num] || 0) + 1;
    }

    return count;
}

module.exports = countPairs;
