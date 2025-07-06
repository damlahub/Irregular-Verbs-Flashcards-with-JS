const gameBtn = document.querySelector("#gameBtn");
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

let score = 0;
let timer;
let timeValue = 15;
let timeLeft = timeValue;

const clearMain = () => MAIN_CONTENT.innerHTML = '';

const showIncompleteWords = (compareWith, resetTimer = true) => {
  //timeLeft = timeValue;
  if (resetTimer) {
    timeLeft = timeValue;
  }

  const incompleteWordsArray = JSON.parse(localStorage.getItem('allNoWords')) || [];
  MAIN_CONTENT.innerHTML = '';
  MAIN_CONTENT.style.height = '100vh';
  MAIN_CONTENT.style.width = '100%';
  MAIN_CONTENT.style.justifyContent = 'center';
  MAIN_CONTENT.style.alignItems = 'center';

  const sectionTitle = document.createElement("h1");
  sectionTitle.style.color = "rgb(255, 85, 85)";
  sectionTitle.style.fontSize = "1.5em";

  const restartGame = document.createElement("button");
  restartGame.innerHTML = "Restart";
  restartGame.style.backgroundColor = "red";
  restartGame.style.color = "white";
  restartGame.style.padding = "20px";
  restartGame.style.display = "none";

  if (incompleteWordsArray.length === 0) {
    let counterWarning = document.createElement("h1");
    counterWarning.style.opacity = ".5";
    counterWarning.innerHTML = 'Havuzda kelime bulunamadı. Lütfen havuza kelime ekleyin.';
    MAIN_CONTENT.appendChild(counterWarning);
  } else {
    const randomWord = incompleteWordsArray[Math.floor(Math.random() * incompleteWordsArray.length)];

    const wordDisplay = document.createElement('h2');
    wordDisplay.innerHTML = `${randomWord.v1}`;
    wordDisplay.classList.add("randomWord");
    const inputField = document.createElement('input');
    inputField.classList.add("inputAnswer");
    inputField.type = 'text';
    inputField.placeholder = 'userGuess';
    const submitButton = document.createElement('button');
    submitButton.classList.add("checkItBtn");
    submitButton.innerHTML = 'check it';
    submitButton.type = "button";
    console.log(randomWord, randomWord.turkishMeaning);

    const startTimer = () => {
      clearInterval(timer);
      timerDisplay.innerHTML = `Time: ${timeLeft}`;
      timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerHTML = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
          clearInterval(timer);
          restartGame.style.display = "block";
          submitButton.style.display = "none";
          wordDisplay.style.display = "none";
          inputField.style.display = "none";
          timerDisplay.style.visibility = "hidden";
          restartGame.addEventListener("click", () => {
            score = 0;
            timeLeft = timeValue;
            submitButton.style.display = "block";
            restartGame.style.display = "none";
            wordDisplay.style.display = "block";
            inputField.style.display = "block";
            timerDisplay.style.display = "block";
            showIncompleteWords(compareWith);
          });
        }
      }, 1000);
    };

    const timerDisplay = document.createElement('h2');
    timerDisplay.innerHTML = `Time: ${timeLeft} `;

    submitButton.addEventListener('click', () => {
      const userGuess = inputField.value;
      let correctAnswer;
      if (compareWith === "v2") {
        correctAnswer = randomWord.v2;
      } else if (compareWith === "v3") {
        correctAnswer = randomWord.v3;
      } else {
        correctAnswer = randomWord.turkishMeaning;
      }

      if (userGuess.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        ShowAlert("Aferin!", "Doğru", "bildin", "green");
        score += 5;
        showIncompleteWords(compareWith, true);
      } else {
        ShowAlert("Doğru", "Cevap:", correctAnswer, "red");
        score -= 5;
        showIncompleteWords(compareWith, false);
      }

      // showIncompleteWords(compareWith);
    });

    MAIN_CONTENT.appendChild(sectionTitle);
    MAIN_CONTENT.appendChild(wordDisplay);
    MAIN_CONTENT.appendChild(inputField);
    MAIN_CONTENT.appendChild(submitButton);
    MAIN_CONTENT.appendChild(timerDisplay);
    MAIN_CONTENT.appendChild(restartGame);
    if (score <= 0) {
      score = 0;
    }
    sectionTitle.innerText = "SCORE: " + score;

    startTimer();
  }
};

const gameButtons = () => {
  const gameTitle = document.createElement("h1");
  gameTitle.textContent = "IrregularVerbs";
  buttonContainer.appendChild(gameTitle);

  const buttonV2 = document.createElement('button');
  buttonV2.innerHTML = "past simple";
  buttonV2.addEventListener('click', () => {
    clearMain();
    showIncompleteWords('v2');
  });

  const buttonV3 = document.createElement('button');
  buttonV3.innerHTML = "past participle";
  buttonV3.addEventListener('click', () => {
    clearMain();
    showIncompleteWords('v3');
  });

  const buttonTurkish = document.createElement('button');
  buttonTurkish.innerHTML = "infinitive";
  buttonTurkish.addEventListener('click', () => {
    clearMain();
    showIncompleteWords('turkish');
  });
  buttonContainer.appendChild(buttonTurkish);
  buttonContainer.appendChild(buttonV2);
  buttonContainer.appendChild(buttonV3);
  MAIN_CONTENT.appendChild(buttonContainer);
}

const game = () => {
  buttonContainer.innerHTML = "";
  clearMain();
  gameButtons();
}

gameBtn.addEventListener("click", game);
