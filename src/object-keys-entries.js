
export function sortedKeys(obj) {
    return Object.keys(obj).sort((string1, string2) => string1.length - string2.length)
}

export function getFilteredKey(obj) {
    return Object.keys(obj).filter((person) => person === 'age')
}

export function getArrayOfKeysAndValues(obj) {
    return Object.entries(obj)
}

export function sortedArraysByValuesLength(obj) {
    return Object.entries(obj).sort((string1, string2) => 
    string2[0].length - string1[0].length
    )
}