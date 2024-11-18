function getKeyByValue<T extends object>(obj: T, value: T[keyof T]): keyof T | undefined {
    return Object.keys(obj).find(key => obj[key as keyof T] === value) as keyof T | undefined;
} 

const person = {
    name: 'julia',
    age: 30,
    isWorking: true
}

console.log(getKeyByValue(person, 'julia'))
console.log(getKeyByValue(person, 25))