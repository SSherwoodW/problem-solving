// add whatever parameters you deem necessary
function longestFall(arr) {
    let counter = 1;
    let maxCounter = 0;

    if (arr.length === 0) {
        return 0;
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            counter++;
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }

    return maxCounter || 1;
}

module.exports = longestFall;
