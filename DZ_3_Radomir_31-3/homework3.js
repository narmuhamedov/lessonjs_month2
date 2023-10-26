// **************************** //Задание 1
var writeUourNumber = Number(prompt('Напиши число от 2 до 10'));
if (writeUourNumber < 2 || writeUourNumber > 10) {
    alert('Вводи строго от 2 до 10 не меньше не больше!!!');
} else {
    for (var res_i = 1; i <= 9; i++) {
        var result = writeUourNumber * res_i;
        console.log('Результат: ' + writeUourNumber + ' × ' + i + ' = ' + result);
    }
}

//*****************************Задание 2
var numberCard = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];
var visaSystemCard = 0;

for (var i = 0; i < numberCard.length; i++) {
    if (numberCard[i][0] === "4") {
        visaSystemCard++;
    }
}

var allCards = numberCard.length;
console.log("Карт VISA: " + visaSystemCard + " из " + allCards + ".");


//*********************Задание 3
var typeCard = prompt('Введите тип карты (SILVER, GOLD или PLATINUM):');
var writeYourLiters = parseFloat(prompt('Введите количество литров бензина:'));

var pointsForLiter = 0;

if (typeCard.toUpperCase() === 'SILVER') {
    pointsForLiter = 0.5;
} else if (typeCard.toUpperCase() === 'GOLD') {
    pointsForLiter = 0.75;
} else if (typeCard.toUpperCase() === 'PLATINUM') {
    pointsForLiter = 1;
} else {
    console.log('Неверный тип карты.');
}

if (!isNaN(writeYourLiters) && writeYourLiters >= 0) {
    var points_result = pointsForLiter * writeYourLiters;
    console.log('Вы заработали ' + points_result + ' баллов.');
} else {
    console.log('Введите корректное количество литров бензина.');
}
