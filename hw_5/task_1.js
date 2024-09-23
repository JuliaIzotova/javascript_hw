// Task 1

for (let i = 10; i >= 0; i --){
    if (i % 2 === 0){
        console.log(i);
    }
}

// Task 2
const smile = ":)";
let smile2 = " ";
for (let i = 0; i <= 5 - 1; i ++) { // или просто i < 5?
    smile2 += smile;
console.log(smile2)
}

// Task 2 version 2
const  ulibka  = ":)";
for (let i = 0; i <= 5; i ++) { 
    console.log(ulibka.repeat(i))
}

// Task 3
let text = 'Hello! I am JS student!';
console.log(text.replaceAll(' ', '1'));

