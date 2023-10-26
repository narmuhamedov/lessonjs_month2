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
    } else {
      resultNumber = Number(cardNumberArray[i]);
    }

    isSecond = !isSecond;
    sum += resultNumber;
  }

  return sum % 10 === 0;
}

// DOM - Document Object Model

// document.addEventListener("DOMContentLoaded", function () {
// 1) Search - поиск
var button = document.querySelector("#checkBtn");
var cardNumberInput = document.getElementById("cardNumberInput");
var container = document.querySelector(".container");

// 2) Events - события

function buttonClick() {
  var cardNumber = cardNumberInput.value;
  var cardValidationResult = validateCard(cardNumber);

  var alertText = cardValidationResult
    ? "Card validation success"
    : "Error. Fake card";
  var alertType = cardValidationResult ? "success" : "warning";
  var alert = createAlert(alertText, alertType);

  container.prepend(alert);
}

button.addEventListener("click", buttonClick);

function createAlert(text, type) {

  // return <div class="alert {type}">{text}</div>

  // <div class="alert "></div>
  var div = document.createElement("div"); // <div></div>
  div.classList.add("alert"); // <div class="alert"></div>
  div.innerText = text; // <div class="alert">Text</div>

  switch (type) {
    case "success":
      div.classList.add("success");
      break;
    case "error":
      div.classList.add("error");
      break;
    case "warning":
      div.classList.add("warning");
      break;
  }

  // <div class="alert classX"></div>

  return div;
}

// 3) Manipulate styles - управление стилями

// alert.innerText = "OK OK OK OK";
// alert.classList.add("error");
// });
