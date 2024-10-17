// Напиши функцию countOccurrences, которая принимает массив чисел и возвращает объект с подсчётом каждого числа.
const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

function countOccurrences(arr) {
    return arr.reduce((result, element) => {
        if (result[element]) {
            result[element]+=1;
        }else{
            result[element] = 1;
        }
        return result;
    }, {});
}
console.log(countOccurrences(numbers));