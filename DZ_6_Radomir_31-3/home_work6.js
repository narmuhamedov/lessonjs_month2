  function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function generateLottoNumbers() {
            var lottoContainer = document.getElementById("lotto-container");
            lottoContainer.innerHTML = "";

            for (var i = 0; i < 6; i++) {
                var randomNumber = getRandomInt(1, 99);
                var lottoBall = document.createElement("div");
                lottoBall.classList.add("lotto-ball");
                lottoBall.textContent = randomNumber < 10 ? `0${randomNumber}` : randomNumber;
                lottoContainer.appendChild(lottoBall);
            }
        }

        var generateButton = document.getElementById("generate-button");
        generateButton.addEventListener("click", generateLottoNumbers);