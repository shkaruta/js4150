// Чтение времени  с сервера из страницы через dom
// Время хранится в элементе #theTime, который найден через devtools
// Время там в 12-часовом формате, к 24-часовому скриптом не приводится
// Предварительно нужно установить пакет для работы с dom-деревом
// npm install jsdom

const { JSDOM } = require('jsdom');
const url = 'https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg';

async function fetchTime() {
    const response = await fetch(url);
    const html = await response.text();

    // Создаем виртуальный DOM из HTML
    const dom = new JSDOM(html);

    // Ищем элемент с временем
    const timeElement = dom.window.document.querySelector('#theTime');
    console.log(timeElement.textContent.trim());
}

// Запуск функции
fetchTime();
