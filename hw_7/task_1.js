function separateLogs() {
    console.log("================================");
  }
  
 // Task 1 
function mergedArrays(...array) {
    const newArray = [];
    for (const num of array) {
       newArray.push(...num);
    }
return newArray;
}
console.log (mergedArrays([1,2], [3,4], [5,6]));

separateLogs();

//Task 2
function changeRegister(sentence) {
    const words = sentence.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            result.push(words[i].toLowerCase()); //как я поняла, тут мы первое слово приводим к нижнему регистру
        } else {
            result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1)); // тут остальные слова должны начинаться с большой буквы
        }
    }
    return result.join('_');
}

const sentence = "I am super engineer";
const result = changeRegister(sentence);
console.log(result);

separateLogs();

// Task 3
function fibonacci(n) {
    if (n <=1) {
        return n;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2)}; 
}
const fiboSum = fibonacci(8);
console.log(fiboSum); 
