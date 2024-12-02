"use strict";
function getKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}
const person = {
    name: 'julia',
    age: 30,
    isWorking: true
};
console.log(getKeyByValue(person, "julia"));
