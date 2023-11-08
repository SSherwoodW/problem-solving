// add whatever parameters you deem necessary
function separatePositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            let removed = arr.splice(i, 1);
            arr.unshift(Number(removed));
        }
    }
    console.log(arr);
    return arr;
}

function bubbleSeparatePositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < 0 && arr[j + 1] > 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

module.exports = separatePositive;
