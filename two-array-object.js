// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let object = {};

    let arr1Pointer = 0;
    let arr2Pointer = 0;

    while (arr1[arr1Pointer]) {
        if (arr2[arr2Pointer]) {
            object[arr1[arr1Pointer]] = arr2[arr2Pointer];
        } else {
            object[arr1[arr1Pointer]] = null;
        }
        arr1Pointer++;
        arr2Pointer++;
    }
    return object;
}

module.exports = twoArrayObject;
