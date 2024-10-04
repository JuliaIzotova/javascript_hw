function separateLogs() {
    console.log("================================");
  }
// Task 1

function isPalindrome(word) {
    const palindromWord = word.toLowerCase(); //приводим все к нижнему регистру
    return palindromWord.split('').reverse().join('') === palindromWord; // split для преобразования строки в массив
} // reverse для переворота, join соединяем обратно и сравниваем с оригинальным словом
console.log(isPalindrome("Заказ"));

console.log(isPalindrome("ура"));
separateLogs();

// Task 2
function longestWord(sentence) {
    const words = sentence.split(" "); // Разделяем предложение на слова
    const longWords = []; // Массив для хранения слов с максимальной длиной
    let maxLength = 0; // Переменная для хранения максимальной длины

    words.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length;
            longWords.length = 0;
            longWords.push(word);
        } else if (word.length === maxLength) {
            longWords.push(word); // Добавляем текущее слово
        }
    });

    return longWords; 
}
const result = longestWord("ну это конечно жесть");
console.log(result); 