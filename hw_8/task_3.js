function separateLogs() {
    console.log("================================");
  }
const arr = [5, 2, 7, 3, 8, 1, 6];

function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2;  
    const actualSum = arr.reduce((sum, num) => sum + num, 0);  
    return expectedSum - actualSum;  
  }
  console.log(findMissingNumber(arr));
separateLogs();


function findMissingNumber (arr) {
    arr.sort((a, b) => a - b); 
    const missingNumber = arr.find((num, index) => num+1 !== arr[index +1]);
    return missingNumber+1;
 }
console.log(findMissingNumber(arr))
separateLogs();

function findMissingNumber(arr) {
    arr.sort((a,b) => a-b);
    let result = -1;
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i]+1 !== arr[i+1]){
            result = arr[i]+1;
        }
    }
    return result;
}
console.log(findMissingNumber(arr));
separateLogs();


