const competitorPizzas = ["Peperoni", "Caprichosa", "Diablo", "4 cheeses", "hawai"];
// const myPizzas = ["peperoni", "margarita", "chicken", "Diablo"];
const myPizzas = ["Peperoni", "Caprichosa", "Diablo", "4 cheeses", "hawai"];
const extraPizza = [];

for (let i = 0; i < myPizzas.length; i++) {
    myPizzas[i] = myPizzas[i].toUpperCase();
}
for (let i = 0; i < competitorPizzas.length; i++) {
    competitorPizzas[i] = competitorPizzas[i].toUpperCase();
}

for (const pizza of myPizzas) {
    if (!competitorPizzas.includes(pizza)) {
        extraPizza.push(pizza);
    }
}

if (extraPizza.length !== 0 ){
    console.log(extraPizza);
}else{
    console.log(null);
}