var amount = prompt("Enter ammount");
var currency = prompt("Enter currency")
var converterAmount = 0;

//операторы сравнения: > < >= <= == === != !==
//логические операторы &&(AND, И) || (OR ИЛИ)

//делает все буквы большие вне зависимости от символом
currency = currency.toUpperCase();

//делает все буквы заглавными
//currency = currency.toLowerCase();

//разница между == и ===  - 2 == не строгая , === строгая


// if (
//     currency==="AU"||
//     currency==="au"||
//     currency==="Au"||
//     currency==="aU"
// ){
if (currency === "AU") {
    converterAmount = amount / 5000;
} else if (currency === 'AG') {
    converterAmount = amount / 2500;
} else if (currency === 'PL') {
    converterAmount = amount / 7500;
} else {
    //warn(мы прописываем свою системную ошибку)
    console.warn("We convert only metals (AU, AG, PL)");
}

switch (currency) {
    case "AU":
        converterAmount = amount / 5000;
        break;
    case "AG":
        converterAmount = amount / 2500;
        break;
    case "PL":
        converterAmount = amount / 7500;
        break;
}

console.log({converterAmount});


var arabicNumber = Number(prompt('Enter number [1-9]'))
//break нужен для выполнения ветки завершения
switch (arabicNumber) {
    case 1:
        console.log(arabicNumber + "= I");
        break;
    case 2:
        console.log(arabicNumber + "= II");
        break;
    case 3:
        console.log(arabicNumber + "= III");
        break;
    default:
        console.error('Write 1 - 9');
}

var cardType = "VISA";

switch (cardType) {
    case "VISA":
        console.log("GET balance from VISA");
        break;
    case "ELCART":
        console.log("GET balance from IPC");
        break;
    case "MasterCard":
    case "Maestro":
        console.log("GET balance from MasterCard");
        break;
}

//термин DRY - Don't repeat yourself

var lightColor = 'жашыл';
switch (lightColor) {
    case "green":
    case "жашыл":
    case "зеленый":
    case "зелёный":
        document.body.style.backgroundColor = 'green';
}

// массивы arrays
var customerPhones = ["+996 555 111 222", "+996 500 111 222", "+996 777 111 222"];
//                               0                     1                 2
var data_types = [];
//push добавление как append в python
//особенности у массива
data_types.push(50);
data_types.push('qwerty');
data_types.push(343.443);
data_types.push(true);
data_types.push(undefined);
data_types.push({})

console.log('we learned ' + data_types.length + "data_types")

//нахождение по идексу
var customerPrimaryPhone = customerPhones[0];

var children = [1992, 1995, 2001, 2002, 2003, 2002, 2008, 2012, 2015, 2018, 2017, 2017, 2022, 2023];
var giftCount = 0;

//циклы for..of
var currentYear = new Date().getFullYear();
//var currentYear = 2023;
for (var clild of children) {
    var childAge = currentYear - clild;
    console.log('Year - > ' + childAge);
    if (childAge >= 6 && childAge < 12) {
        giftCount += 1;
        //giftCount++; тоже самое если прибавляем 1
    }
}
console.log("GIFTS taken " + giftCount + 'of' + children.length);

var transfers = [20_000, 25_000, 45_000, 14_000, 58_000, 2_000];
//for со счетчиком
//continue
//break
var limits = {
    perTransfer: 25_000,
    monthTransfer: 50_000,
}
var monthTransferTotal = 0;
for (var i = 0; transfers.length; i++) {
    var currentTransfer = transfers[i];
    if (currentTransfer > limits.perTransfer) {
        console.error("perTransfer limit error");
        continue
    }
    console.log(i + 1 + '-й перевод отправлен успешно');
}

