// Скрипт читает страницу сервера времени и через регулярное выражение находит строку \d\d:\d\d:\d\d
const url = 'https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg';

async function fetchTime() {
    const response = await (await fetch(url)).text();
    const timeMatch = response.match(/\d{2}:\d{2}:\d{2}/);
    if (timeMatch) {
        console.log(timeMatch[0]);
    } else {
        console.error('Время не найдено.');
    }
}

// Запуск функции
fetchTime();
