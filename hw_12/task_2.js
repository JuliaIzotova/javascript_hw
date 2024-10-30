// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 200. Если статус не 200 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
const body1 = {
    userId: 1,
    title: 'hello',
    completed: false,
}

async function createTodo(bodyTodo) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyTodo)
        })
        if (!response.ok) {
            throw new Error(`Ошибка ответа ${response.status}`)
        }
        const data = await response.json();
        for (const key in bodyTodo) {
            console.log (bodyTodo[key], '===', data[key])
            if (bodyTodo[key] !== data[key]) {
                throw new Error(`Ошибка! Ключ ${bodyTodo.key} не совпадает с ${data.key}`);
            }
        }return data;
    } catch (err) {
        console.error(err);
    } finally {
        console.log('Работа функции завершена');
    }
}
        
createTodo(body1)
    .then(result => {
    console.log('Created Todo:', result)
    });