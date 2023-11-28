// callback - функции обратного вызова

// high order functions - функции высшего порядка
function calculator(a, b, callback) {
  var result = callback(a, b);
  //   console.log(result); делать не надо
  return result;
}

// function declaration
function sum(a, b) {
  return a + b;
}

//function expression
var diff = function (a, b) {
  return a - b;
};

console.log(calculator(5, 5, sum));
console.log(calculator(5, 5, diff));
console.log(
  calculator(5, 5, function (a, b) {
    // anonymous function
    return a * b;
  })
);

console.log(
  calculator(1000, 25, function (a, b) {
    return (a * b) / 100;
  })
);

localStorage.setItem("result", calculator(5, 14, sum));

function sendRequest(request, successCb, errorCb) {
  if (request.url === "https://localhost:5500") {
    successCb();
  } else {
    errorCb();
  }
}

var myRequest = {
  url: "https://www.google.com",
};

sendRequest(
  myRequest,
  function () {
    console.log("Request successfully completed");
  },
  function () {
    console.error("Request completed with errors. Check URL");
  }
);
