const startButton = document.getElementById("startQuiz");
const timeEl = document.querySelector(".time");

let score = 0
let questionsRight = 0
localStorage.setItem ("right", questionsRight);
localStorage.setItem("score", score);

let secondsLeft = 60;
localStorage.setItem("time", secondsLeft);
function setTime() {
  const timerInterval = setInterval(function() {
    localStorage.setItem("time", secondsLeft);
      secondsLeft--;
      timeEl.textContent = ("Time left: ") + secondsLeft;
        console.log("current time is" + secondsLeft)
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
   
    
  }

  function sendMessage() {
    timeEl.textContent = "Time's up, no bonus points ";
  }

  function nextPage() {
    window.location = 'question1.html';
  }

startButton.addEventListener("click", () => {
  setTime();
  nextPage();

})

