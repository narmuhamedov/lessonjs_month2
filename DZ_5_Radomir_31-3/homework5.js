var countElement = document.getElementById("count");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var resetButton = document.getElementById("reset");

var count = 0;

function updateCountDisplay() {
    countElement.textContent = count;

    if (count > 0) {
        countElement.classList.remove("red", "gray");
        countElement.classList.add("green");
    } else if (count < 0) {
        countElement.classList.remove("green", "gray");
        countElement.classList.add("red");
    } else {
        countElement.classList.remove("green", "red");
        countElement.classList.add("gray");
    }
}

incrementButton.addEventListener("click", () => {
    count++;
    updateCountDisplay();
});

decrementButton.addEventListener("click", () => {
    count--;
    updateCountDisplay();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCountDisplay();
});

updateCountDisplay();
