// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    let pointer = 0;

    let frequencies1 = frequencyCounter(int1.toString());
    let frequencies2 = frequencyCounter(int2.toString());

    const int1Keys = Object.keys(frequencies1);

    for (let key of int1Keys) {
        if (!(key in frequencies2) || frequencies1[key] !== frequencies2[key])
            return false;
    }
    return true;
}

function frequencyCounter(str) {
    let frequencies = {};

    for (let char of str) {
        let numCount = frequencies[char] || 0;
        frequencies[char] = numCount + 1;
    }

    return frequencies;
}

// iterate over the first string
// inside first loop, iterate through second string

module.exports = sameFrequency;
