// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if (!msg) return true;

    let msgFrequencies = letterFrequencyCounter(msg);

    let letterFrequencies = letterFrequencyCounter(letters);

    const msgKeys = Object.keys(msgFrequencies);

    // check if 1. keys of msg-characters are also keys in letter-characters AND 2. # value for those characters is => than # value for letter-characters
    for (let key of msgKeys) {
        if (
            !(key in letterFrequencies) ||
            msgFrequencies[key] > letterFrequencies[key]
        )
            return false;
    }
    return true;
}

function letterFrequencyCounter(letters) {
    let frequencies = {};
    for (const char of letters) {
        let charCount = frequencies[char] || 0;
        frequencies[char] = charCount + 1;
    }

    return frequencies;
}

module.exports = constructNote;
