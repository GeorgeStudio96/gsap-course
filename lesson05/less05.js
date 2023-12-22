let screenPrice = 10000
let percentage = 10



let titleProject = prompt('Название проекта')
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue);

let responsive = prompt('Нужен ли респонсив на сайте?')
console.log(responsive);

let service = prompt('Какой дополнительный тип услуги нужен?')
console.log(service);

let servicePrice = +prompt('Сколько это будет стоить?')
console.log(servicePrice);

let serviceSecond = prompt('Какой дополнительный тип услуги нужен?')
console.log(serviceSecond);

let servicePriceSecond = +prompt('Сколько это будет стоить?')
console.log(servicePriceSecond);

let fullPrice = screenPrice + servicePrice + servicePriceSecond
console.log(fullPrice);


let percentageResult = +(fullPrice * (percentage / 100))
console.log(percentageResult, 'Процент подрядчику: ')

// Create new Variables

let servicePercentPrice = fullPrice - percentageResult
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма проекта за вычетом % подрядчику');




let allServicePrices;

const getAllServicePrices = function() {
    return servicePrice + serviceSecond
}

allServicePrices = getAllServicePrices()
console.log(allServicePrices, ' вызвали функцию с суммой всех доп услуг');


function getFullPrice() {
    return screenPrice + allServicePrices
}
fullPrice = getFullPrice();



let newTitle = '';

const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}

newTitle = getTitle();


const getServicePercentPrices = function () {
    return fullPrice - servicePercentPrice
}

servicePercentPrice = getAllServicePrices();






// Предоставление скидки

if(fullPrice > 50000) {
    console.log('Делаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log('Делаем скидку 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так')
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) { 
    console.log('Проверка на строгое равенство')
}
