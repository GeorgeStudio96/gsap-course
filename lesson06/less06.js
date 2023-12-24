let screenPrice;
let percentage = 10
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let service;
let serviceSecond;




const checkIsNumber = function(x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}




const asking = function() {
    titleProject = prompt('Название проекта', 'КальКУлЯтОр')
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями', 'с анимациями')    

    screenPrice = prompt('Сколько это будет стоить?', 12000)

    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколько это будет стоить?', 12000)
    }
    screenPrice = Number(screenPrice)

    responsive = prompt('Нужен ли респонсив на сайте?', 'нужен')


}





const getAllServicePrices = function() {
     let sum = 0

     for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
        } else if (i === 1) {
            serviceSecond = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
        }

        let textFromPromt = '';

        while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?') 
        }

        sum += Number(textFromPromt)

    }

return sum

}



function getFullPrice() {
    return screenPrice + allServicePrices
}


const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percentage / 100)) 
}


const getTitle = function () {
    return titleProject.trim()[0].toUpperCase() + titleProject.trim().slice(1).toLowerCase()
}




const getPercentageMessage = function(price) {

    if(price > 50000) {
        return 'Делаем скидку 10%'
    } else if (price > 20000 && price < 40000) {
        return 'Делаем скидку 5%'
    } else if (price < 20000 && price > 0) {
        return 'Скидка не предусмотрена'
    } else if (price < 0) {
        return 'Что-то пошло не так'
    } else if (price === 0 || price === 20000 || price === 50000) { 
        return 'Проверка на строгое равенство'
    }
}







asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();





console.log(newTitle); // Калькулятор
console.log(allServicePrices); // 3000
console.log(fullPrice); // 12000 + 3000 = 150000 
console.log(Math.ceil(servicePercentPrice)); // 13500
console.log(getPercentageMessage(fullPrice)); // Скидка не предусмотрена

