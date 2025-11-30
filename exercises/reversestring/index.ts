// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// best solution
function reverse(str: string): string {
    return str.split('').reverse().join('');
}

// possible next best solution
// function reverse(str: string): string{
//     let rev = '';
//     for(let char of str){
//         rev = char + rev;
//     }
//     return rev;
// }

// another solution
// function reverse(str: string): string{
//     return str.split('').reduce((rev, char): string => char + rev, '');
// }

// worst solution
// function reverse(str: string): string{
//
//     let split = str.split('');
//     for(let i = 0; i < split.length; i++){
//         let lastItem = split.pop();
//         split.splice(i, 0, <string>lastItem);
//     }
//     str = split.join('');
//     return str;
// }

export {reverse};
