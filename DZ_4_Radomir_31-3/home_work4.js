//задание 1
// function getRange(start, end, step = 1) {
//   var result_mass = [];
//
//   for (let i = start; i <= end; i += step) {
//     result_mass.push(i);
//   }
//
//   return result_mass;
// }
// alert('Вывод цифр шагом 1')
// console.log(getRange(Number(prompt('Ваше стартовое число')), Number(prompt('Ваше конечное число'))));
//
// alert('Вывод цифр шагом задаваемым пользователем')
// console.log(getRange( Number(prompt('Ваше стартовое число')),
//     Number(prompt('Ваше конечное число')), Number(prompt('Каким шагом хотите вывести?')) ));

//Задание 2
// function myReverseString(str) {
//     var reversedStringText = '';
//
//     for (var i = str.length - 1; i >= 0; i--) {
//         reversedStringText += str[i];
//     }
//
//     return reversedStringText;
// }
//
// var reversedValue = myReverseString(String(prompt('Напишите что нибудь!')));
//
// console.log(reversedValue);


//Задание 3
// function maskingBankCard(numberCard, symbol = 'X') {
//   if (numberCard.length < 10) {
//     return numberCard;
//   }
//
//   var visibleNumbers = 6;
//   var endVisibleNumbers = 4;
//   var generalNumbers = numberCard.length;
//
//   var maskedCardNumber = '';
//
//   for (var i = 0; i < generalNumbers; i++) {
//     if (i < visibleNumbers || i >= generalNumbers - endVisibleNumbers) {
//       maskedCardNumber += numberCard[i];
//     } else {
//       maskedCardNumber += symbol;
//     }
//   }
//
//   return maskedCardNumber;
// }
//
// console.log(maskingBankCard('123456789123456'));  // Output: "481515XXXXXX1789"
// console.log(maskingBankCard('1234567890123456', "*"));  // Output: "481515******1789"
