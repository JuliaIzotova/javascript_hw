function map<T, U>(arr: T[], callback:(value: T, index: number, arr: T[]) => U): U[] {
  const newArr: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}
console.log(map([1, 2, 3, 4, 5], (value, index) => value * index)); 

//еще через type

type callback1<T, U> = (value: T, index: number, array: T[]) => U;
function map1<T, U>(array: T[], callback: callback1<T, U>): U[] {
    const newArr: U[] = [];
    for(let i=0; i < array.length; i++){
        newArr.push(callback(array[i], i, array));
    }
    return newArr;
}
const result = map1([1, 2, 3, 4, 5], (value, index) => value * index);
console.log(result);