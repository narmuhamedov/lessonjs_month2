/*всплывание функции*/
alert("Hello Frontend");
document.body.style.backgroundColor = "#333";


// /*Хранение данных в переменной*/
// var userName = "Radomir" ;
//
// /*Вывод сообщение в вспывающем сообщении*/
//  userName = prompt("Как тебя зовут чувак?");
//  alert("Дароф," + userName + "!");
//  document.write("Дароф," + userName + "!");
//  console.log("Дароф," + userName + "!")
//
// //перезапись переменной
// userName = 5;

//Типы данных
//1) string
var customerName = 'Radomir';
var customerSurname = 'Narmukahmedov';
var customerFatherName = 'Tolkunovitch';

//2) number - можем хранить как и числа + - , так и дробные числа
var customerID = 1234;
var customerSalary = 1000;

//3)boolean
var customerSex = true;// true-мужской, false-женский
var customerAgree = true;
var isMobileBankingUser = false;

//4)не определенный тип данных undefined
var customerDateBirdth;
//var customerDateBirdth1 = undefined;


//underfined - устанавливает сама среда js, а null прочерк

//5) null
var customerAddress = null;

//6)object
var pernsionerPassport = {
  Series:'AN',
  Number:'98349',
  INN:'202100302430',
  IssuedDate:'01-01-2020',
  ExpiryDate:null,
  IssueAuthor:'GUVD BISHKEK',
  IsUnlimited:true
};


var customerPassport = {
  Series:'ID',
  Number:'98349',
  INN:'202100302430',
  IssuedDate:'01-01-2020',
  ExpiryDate:'01-01-2030',
  IssueAuthor:'GUVD BISHKEK',
  IsUnlimited:false
};



//7)BigInt


//8)Symbol
