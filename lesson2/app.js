//снипеты тот что подсказывает
console.log('lesson2');

//camel case
//1 ключевые слова запрещены
//2 первый символ не должен быть цифрой или любым знаком кроме _, $
//3 JS регистроризированный язык
var myFirstVariable = 5;
var $breake = 5;
var _case = 5

var Apple = 'iphone';
var apple = 'Ipad';

var переменная = 'так делать нельзя';
var pernemmyana = 'так делать нельзя';
var variable = 'так делать можно но не обязательно';


Apple = 'mac book';
console.log("Apple = ", Apple);
console.log('apple =', apple);
console.log('переменная = ', переменная)

//string
// + concatinate onlystring
var customerName = 'Radomir';
var customerSurname = 'Narmukahmedov';
var customerFatherName = 'Tolkunovitch';

var mbankResirverName = customerName[0]+' '+customerSurname;
var CustomerFullName=customerName+' '+customerSurname+' '+customerFatherName;
var CustomerShortFullName = customerSurname+' '+customerName[0]+'.'+customerFatherName[0]+'.';

//Экранированиие - escaping для того чтобы такой пример вывео со символом \
var MyProjectPath = "C:\\User\\Pycharm_Projects\\lessonjs_month2\\app.js";
var companyName = "OBJF\"FininiSoft\"";
console.log(MyProjectPath);
//document.writeln(MyProjectPath);
//document.writeln(companyName);
//document.writeln(companyName +'<br/>'+MyProjectPath);

console.log({CustomerFullName});
console.log({mbankResirverName});
console.log({CustomerShortFullName});
console.log({companyName});
console.log({MyProjectPath});
console.log(MyProjectPath+'\n'+companyName);

//string
var bankAccount = {
    no: '23434534',
    currently: "KGS",
    balance: 10000,
    ower: CustomerFullName
}

//boolean
//операторы сравнения: > < >= <= == === != !==

var CashOutSum = Number(prompt('выведите деньги'));
bankAccount.balance -=CashOutSum;
// document.writeln('Cash Out sum is'+CashOutSum);
// document.writeln('Current balance = '+bankAccount.balance);
if (CashOutSum > bankAccount.balance){
    document.writeln('Error')
}else {
    document.writeln('Current balance = '+bankAccount.balance);
    document.writeln('Cash Out sum is'+CashOutSum);
}




console.log(bankAccount.balance+1000);
console.log(bankAccount.balance-1000);
console.log(bankAccount.balance*1000);
console.log(bankAccount.balance/1000);
console.log(bankAccount.balance%25);
console.log(bankAccount.balance**2);

//bankAccount.balance = 500 + 1000;
//bankAccount.balance+=100;
// bankAccount.balance-=100;
// bankAccount.balance*=100;
// bankAccount.balance%=100;
// bankAccount.balance**=100;

// console.log(100/0);//бесконечность infinty
// console.log(Infinity-Infinity);//NaN not a number
// var amount = Number(prompt("enter sum in balance")); //ввод как input плюс указание все будет number
// console.log(typeof amount)//проверить тип данных
// bankAccount.balance+=amount
// //document.writeln('Current balance = '+bankAccount.balance);
// //number.ParseInt
// //number.ParseFloat
// //+

console.log('current balance = '+ bankAccount.balance);

