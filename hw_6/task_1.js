// Task 1 Цикл for...of в массиве

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNumbers = [];
for (const number of numbers)
    if (number % 2 === 0) {
        arrayNumbers.push(number ** 2) 
    }else{
        arrayNumbers.push(number ** 3)
    }
    console.log(arrayNumbers);
    console.log("\n================NEXT=================\n");

   // Version 2 of Task 1 
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numArray2 =[]
for (const num of numArray) {
    num % 2 === 0 ? numArray2.push(num ** 2) : numArray2.push(num ** 3);
    }
console.log(numArray2)
console.log("\n================NEXT=================\n");

// Task 2 Методы массивов
const arrayNum = [1, 2, 3, 4, 5];
arrayNum.push(6);
arrayNum.unshift(0);
arrayNum.splice(2,1);
arrayNum.pop();
console.log(arrayNum)
console.log("\n================NEXT=================\n");

// Task 3 Деструктуризация массивов
const arrayOfNumbers = [1, 5, 20, 100, 1000];
const [first, second, ...rest] = arrayOfNumbers;
console.log(first);
console.log(second);
console.log(rest); 
console.log("\n================NEXT=================\n");

//Task 4  Конкатенация массивов
const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];
const mergedArray = [...arrayOne,...arrayTwo];
console.log(mergedArray);
console.log("\n================NEXT=================\n");