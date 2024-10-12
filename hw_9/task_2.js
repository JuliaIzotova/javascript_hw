const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
]

// 1. Напишите функцию addCharacter(character), позволяющую добавить новый объект в массив characters.
//Объект должен иметь поля name (string) и age (number)

function addCharacter(character) {
    if(typeof character.name === 'string' && typeof character.age === 'number') {
        characters.push(character)
    }else{
        console.log('error');
    }
}
addCharacter({'name' : 'Julia', 'age': 33})
console.log(characters);
separateLogs();

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени
// getCharacter(Fred) => {'name':'Fred', 'age': 40}

function getCharacter(name) {
    return characters.find((el) => el.name === name);
}
function getCharacter2(name) {
    return characters.find((el) => el.name.toLowerCase() === name.toLowerCase());
}
console.log(getCharacter('Julia'))
console.log(getCharacter2('julia'))
separateLogs();

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей не младше minAge
// getCharactersByAge(40) => [{name':'Fred', 'age': 40}, {'name': 'Jack', 'age': 50}]

function getCharactersByAge(minAge) {
    return characters.filter((character) => character.age > minAge)
}
console.log(getCharactersByAge(35));
separateLogs();


// 4. Напишите функцию updateCharacter(name, newCharacter) - методом getCharacter(name) получаем ссылку на нужного
// персонажа, а потом меняем ему данные

function updateCharacter(name, newCharacter) {
    const character = getCharacter(name);
    if (!character) {
        console.log("not found");
        return characters;
    }
    character.name = newCharacter.name;
    character.age = newCharacter.age;
}
updateCharacter('Jack', {name: 'Johny', age: 1});
// updateCharacter('Nikol', {name: 'Johny', age: 1});
console.log(characters);
separateLogs();

//Use Object.assign
function getCharacter(name) {
    return characters.find((character) => character.name === name);
}
function updateCharacter(name, newCharacter) {
    const character = getCharacter(name); 

    if (!character) {
        console.log("Not found"); 
        return characters;  
    }
    Object.assign(character, newCharacter);
    return characters;
}
const newChar = {name: 'Frenzy', age: 2};
console.log(updateCharacter('Fred', newChar)); 
separateLogs();

// 5. Напишите функцию для удаления персонажа removeCharacter(name)
// Реализовать через splice, индекс персонажа искать методом findIndex
function removeCharacter(name) {
const index = characters.findIndex((character) => character.name === name);
if(index !== -1) {
    characters.splice(index, 1);
}
return characters;
} 
console.log(removeCharacter('Julia'))
  
function separateLogs() {
    console.log("================================");
  }