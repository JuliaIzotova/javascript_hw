for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Число ${i} делится на 3 и на 5`);
    } else if (i % 3 === 0) {
        console.log(`Число ${i} делится на 3`);
    } else if (i % 5 === 0) {
        console.log(`Число ${i} делится на 5`);
    }
}    
