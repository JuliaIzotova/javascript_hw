function countVowels(word) {
    const vowels = 'aeiou';
    let count = 0;
    for (let letter of word) {
        if (vowels.includes(letter)) {
        count++;
        }
    }
    return count;
}
// function countVowels(words) {
//     const vowels = 'aeiou';
//     return [...words].filter((char) => vowels.includes(char)).length;
// }
function sortVowelsInWord(words) {
    return words.sort((a, b) => countVowels(a) - countVowels(b));  
}
const words = ['umbrella', 'apple', 'ocean', 'independent', 'education', 'elephant', 'island', 'universe', 'environment', 'queue'];
console.log(sortVowelsInWord(words));


  