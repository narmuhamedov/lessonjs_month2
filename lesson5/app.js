function validateCard(cardNumber) {
  var cardNumberArray = cardNumber.split("");

  var isSecond = false;

  var sum = 0;

  for (var i = cardNumberArray.length - 1; i >= 0; i--) {

    var resultNumber = 0;

    if (isSecond) {
      var doubleNumber = cardNumberArray[i] * 2;
      var doubleNumberString = doubleNumber.toString().padStart(2, "0");
      resultNumber =
        Number(doubleNumberString[0]) + Number(doubleNumberString[1]);
    }else{
        resultNumber = Number(cardNumberArray[i])
    }

    isSecond = !isSecond;
    sum += resultNumber;
  }

  return sum % 10 === 0;
}

// DOM - Document Object Model

// 1) Search - поиск
var button = document.querySelector("#checkBtn");
var cardNumberInput = document.getElementById("cardNumberInput");
var alert = document.querySelector(".container .alert");

// 2) Events - события

function buttonClick() {
  var cardNumber = cardNumberInput.value;
  var cardValidationResult = validateCard(cardNumber);

  alert.innerText = cardValidationResult
    ? "Card validation success"
    : "Error. Fake card";
  alert.classList.add(cardValidationResult ? "success" : "error");
}

button.addEventListener("click", buttonClick);

// 3) Manipulate styles - управление стилями

// alert.innerText = "OK OK OK OK";
// alert.classList.add("error");
