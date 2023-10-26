//1 задание
console.log('Введите 2 числа для сравнения больше меньше либо равно!');

var firsNumber = Number(prompt('Введите первое число '));
var secondNumber = Number(prompt('Введите второе число '));

if (firsNumber > secondNumber) {
    console.log('Первое число будет больше второго ' + firsNumber + ' > ' + secondNumber);
} else if (firsNumber < secondNumber) {
    console.log('Второе число будет больше первого ' + secondNumber + ' > ' + firsNumber);
} else {
    console.log('Они равны между собой ' + firsNumber + ' = ' + secondNumber);
}

//ctrl+alt+l - настраивает код

//2 задание
var color = String(prompt('Какой сейчас горит сигнал светофора? '));
if (color === "red") {
    console.log('Стоп горит ' + color);
} else if (color === "yellow") {
    console.log('Готовься к остановке или проскочи горит ' + color);
} else if (color === "green") {
    console.log('Езжай горит ' + color);
} else {
    console.log('Смотри по ситуации')
}

//3 задание
var russianInput = Number(prompt("Введите число от 1 до 9:"));
var romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

if (russianInput >= 1 && russianInput <= 9) {
    console.log('Римское число для ' + russianInput + '->' + romanNumerals[russianInput - 1]);
} else {
    console.log("Число должно быть от 1 до 9");
}
