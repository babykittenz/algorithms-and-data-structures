// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

type NumberRecord = {
    [key: string]: number;
};

function createCharMap(str: string): NumberRecord {
    let charMap: NumberRecord = {};

    // create a new record in the object and add 1 to it.
    str.split('').forEach(letter =>{
        charMap[letter] = (charMap[letter] || 0) + 1
    })

    return charMap;
}

function maxChar(str : string): string {
    // count characters
    let object = createCharMap(str);

    //convert the object to an array and find which character has the highest count
    return Object.keys(object).reduce((a,b) => object[a] > object[b] ? a : b);
}

export { maxChar, createCharMap };
