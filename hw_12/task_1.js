// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, 
//которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(callback) {
    setTimeout(() => callback(), 2000); // or setTimeout(callback, 2000);
}
delayTwoSeconds(() => console.log('wait 2 seconds for function'));
// 2. Создайте переменную, в которую присвоите новый промис. 
//Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат его резолва в консоль
const promise = new Promise((resolve, reject) => {
    resolve(1);
});
promise.then((result) => {
    console.log(result)
});
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
// Обработайте промис методом .catch и выведите результат его резолва в консоль
const promise1 = new Promise((resolve,reject) => {
    reject('Promise failed')
});
promise1.catch((error) => {
    console.error(error); 
});

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(num) {
    return new Promise((resolve) => {
        resolve(num)
    });
}    
promiseNumber(100)
    .then(result => {
    console.log(result)
});

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]),
// обработайте его результаты и последовательно выведите
//в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
   .then((result) => {
    console.log(`Result first promise is ${result[0]}\nResult second promise is ${result[1]}\nResult third promise is ${result[2]}`);
   })

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
   .then(result => 
    result.forEach((prom, index) => {
        console.log(`Result ${prom}: ${index}`)
    })
   )

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), 
//обработайте его результаты и последовательно выведите
//в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
   .then((results) => {
    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            console.log('Fulfilled:', result.value);
        }else{
            console.log('Rejected:', result.reason)
        }
    });
});

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function allPromises() {
    try {
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach((prom, index) => {
            console.log(`Result ${prom}: ${index}`)
            })
        } 
    catch (error) {
        console.error('sorry, error');
    }
    finally {
        console.log('good job!')
    }
}

allPromises();

async function allSettled() {
    try {
        const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log('Fulfilled:', result.value);
            }else{
                console.log('Rejected:', result.reason)
            }
    });
    }catch (error) {
        console.log('sorry, error')
    }finally {
    console.log('well done!')}
}
allSettled()
