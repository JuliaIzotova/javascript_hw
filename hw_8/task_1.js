function separateLogs() {
    console.log("================================");
  }
const array = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

array.forEach(el => {
    if (el % 3 === 0) {
        console.log(el)
    }
})
separateLogs();

const mapNumbers = array.map(el => el - array.length);
console.log(mapNumbers);
separateLogs();

const filterNumbers = array.filter((el, index) => el > array[index-1]);
console.log(filterNumbers);
separateLogs();

const equalIndex = array.find((el, index) => el === index);
console.log(equalIndex);
separateLogs();

array.sort((x, y) => x - y);
console.log(array);
separateLogs();

const sum = array.reduce((acc, el) => {
  return acc + el;
}, 0);
console.log(sum); 
separateLogs();

const hasLargeNumber = array.some((el) => el > 90);
console.log(hasLargeNumber); 
separateLogs();

const allDouble = array.every((el) => el >= 10 && el.length === 2); //или array.every((el) => el >= 10 && el < 100)
console.log(allDouble); 
