// function summa_numbers() {
//   let sum = 0;
//
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//
//   return sum;
// }
//
// document.writeln(summa_numbers(2,5,6,7))
// console.log(summa_numbers(2, 5, 6, 7));
// console.log(summa_numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//


//1 домашка на ES
// const Student = {
//   FirstName: 'Narmukhamedov',
//   LastName: 'Radomir',
//   Group: 'Geeks31-1F',
//   CurrentMonth: 2,
//   IsGraduate: true,
//   Direction: 'backend',
//   MonthsOfStudy: 4
// };
//
// const BankAccount = {
//   accountNumber: '399 444 222 444',
//   currency: 'Dollars $',
//   balance: 1000000,
//   ownerName: 'Radomir',
//   isBlocked: false
// };
//
// const UserName = prompt('Введите ваше имя:');
// const UserLastName = prompt('Введите вашу фамилию:');
// console.log(`Приветствуем вас, ${UserName} ${UserLastName}!`);
// document.write(`Приветствуем вас, ${UserName} ${UserLastName}!`);
//
//


//2 домашка на ES
// console.log('Введите 2 числа для сравнения больше, меньше либо равно!');
//
// const firstNumber = Number(prompt('Введите первое число '));
// const secondNumber = Number(prompt('Введите второе число '));
//
// if (firstNumber > secondNumber) {
//     console.log(`Первое число будет больше второго ${firstNumber} > ${secondNumber}`);
// } else if (firstNumber < secondNumber) {
//     console.log(`Второе число будет больше первого ${secondNumber} > ${firstNumber}`);
// } else {
//     console.log(`Они равны между собой ${firstNumber} = ${secondNumber}`);
// }

// const color = prompt('Какой сейчас горит сигнал светофора? ');
//
// switch (color) {
//   case 'red':
//     console.log(`Стоп горит ${color}`);
//     break;
//   case 'yellow':
//     console.log(`Готовься к остановке или проскочи горит ${color}`);
//     break;
//   case 'green':
//     console.log(`Езжай горит ${color}`);
//     break;
//   default:
//     console.log('Смотри по ситуации');
// }
//
//
// const russianInput = Number(prompt("Введите число от 1 до 9:"));
// const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
//
// if (russianInput >= 1 && russianInput <= 9) {
//     console.log(`Римское число для ${russianInput} -> ${romanNumerals[russianInput - 1]}`);
// } else {
//     console.log("Число должно быть от 1 до 9");
// }
