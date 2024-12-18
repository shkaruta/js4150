// Скрипт читает через get по url1 данные, суммирует их и записывает через post в форму на url2
// Данные на url1 в виде: {numbers: [ {name: 'n1', value: v1 }, ... ]}

const url1 = 'https://kodaktor.ru/j/numbers'
const url2 = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZyDJ_68Mj7io5vtjyNqul7ceNE1t5Z5KkkN7foqxbIcUsbg/formResponse'
// имя параметра, которое указывается в body
const param = 'entry.364005965'

async function processNumbers() {
    // получаем данные с url1
    const response = await fetch(url1);
    const data = await response.json(); 
    // console.log('Полученные числа:', data);

    // суммируем числа
    let resultString = '';
    const sum = data.numbers.reduce((acc, obj) => acc + obj.value, 0); // Суммируем значения 'value' из объектов массива
    resultString = `${sum} (Shkaruta)`;
    console.log('Строка для отправки:', resultString);

    // отправляем строку в форму на url2
    const postResponse = await fetch(
        url2,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `${param}=${encodeURIComponent(resultString)}`
        }
    );
    console.log('Результат POST-запроса:', postResponse.status, postResponse.statusText);
}

// Запуск функции
processNumbers();
