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

var alertLineWidth = 0;
var alertIntervalId = null;

// 2) Events - события

function buttonClick() {
  var cardNumber = cardNumberInput.value;

  if (!cardNumber) return;

  var cardValidationResult = validateCard(cardNumber);

  var alertText = cardValidationResult
    ? "Card validation success"
    : "Error. Fake card";
  var alertType = cardValidationResult ? "success" : "error";

  var alert = document.querySelector(".alert");

  if (alert) return;

  var alert = createAlert(alertText, alertType);

  container.innerHTML = alert + container.innerHTML;

  alertIntervalId = setInterval(function () {
    var alertLine = document.querySelector(".alertLine");
    alertLineWidth += 1.25;
    alertLine.style.width = `${alertLineWidth}%`;
  }, 50);

  setTimeout(function () {
    var alert = document.querySelector(".alert");
    alert.remove();
    clearInterval(alertIntervalId);
    alertLineWidth = 0;
  }, 4000); // 4 sec
}

button.addEventListener("click", buttonClick);

function createAlert(text, type) {
  var typeClass;

  switch (type) {
    case "success":
      typeClass = "success";
      break;
    case "error":
      typeClass = "error";
      break;
  }

  return `<div class="alert ${typeClass}">
      <div>${text}</div>
      <div class="alertLine ${typeClass}"></div>
    </div>`;

  // return <div class="alert {type}">{text}</div>

  // <div class="alert "></div>
  var div = document.createElement("div"); // <div></div>
  div.classList.add("alert"); // <div class="alert"></div>
  div.innerText = text; // <div class="alert">Text</div>

  // <div class="alert classX"></div>

  return div;
}

// 3) Manipulate styles - управление стилями

// alert.innerText = "OK OK OK OK";
// alert.classList.add("error");
// });

// debugging - отладка
