const startButton = document.getElementById("startQuiz");
const timeEl = document.querySelector(".time");
const falseEl0 = document.querySelector(".false1")
const falseEl1 = document.querySelector(".false2")
const falseEl2 = document.querySelector(".false3")
const true1 = document.querySelector(".true1")

let secondsLeft = localStorage.getItem("time");
localStorage.setItem("time", secondsLeft);
function setTime() {
  const timerInterval = setInterval(function() {
    localStorage.setItem("time", secondsLeft);
      secondsLeft--;
      timeEl.textContent = ("Time left: ") + secondsLeft;
        console.log("current time is" + secondsLeft)
      if(secondsLeft === -1) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
   
    
  }

  function sendMessage() {
    timeEl.textContent = "Time's up, no bonus points ";
  }

  setTime()

let score = JSON.parse(localStorage.getItem("score"));
let questionsRight = JSON.parse(localStorage.getItem("questionsRight"));

falseEl0.addEventListener("click", function(nextpage0){
    nextpage0.preventDefault();
    window.location = 'question2.html';
})

falseEl1.addEventListener("click", function(nextpage1){
    nextpage1.preventDefault();
    window.location = 'question2.html';
})

falseEl2.addEventListener("click", function(nextpage2){
    nextpage2.preventDefault();
    window.location = 'question2.html';
})

true1.addEventListener("click", function(nextpage3){
    nextpage3.preventDefault();
    score = score + 20
    questionsRight ++
    localStorage.setItem("score", score);
    localStorage.setItem("right", questionsRight)
    window.location = 'question2.html';
})