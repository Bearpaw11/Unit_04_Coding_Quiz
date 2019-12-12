const startButton = document.getElementById("startQuiz");
const timeEl = document.querySelector(".time");
const falseEl1 = document.querySelectorAll(".false1")
const trueEl1 = document.querySelector(".true1")
const falseEl2 = document.querySelectorAll(".false2")
const trueEl2= document.querySelector(".true2")
const falseEl3 = document.querySelectorAll(".false3")
const trueEl3= document.querySelector(".true3")
const falseEl4 = document.querySelectorAll(".false4")
const trueEl4= document.querySelector(".true4")
const falseEl5 = document.querySelectorAll(".false5")
const trueEl5= document.querySelector(".true5")

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
      if(secondsLeft === -1) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
   
    
  }

  function sendMessage() {
    timeEl.textContent = "Time's up, no bonus points ";
  }

  function hideMain() {
    main.style.display = "none"
    question1.style.display = "inline"
  }

startButton.addEventListener("click", () => {
  setTime();
  hideMain();

})

for (let i =0; i < falseEl1.length; i++){
  falseEl1[i].addEventListener("click", function(nextq0){
      nextq0.preventDefault();
      question1.style.display = "none"
      question2.style.display = "inline"
    })
}

trueEl1.addEventListener("click", function(nextq3){
  nextq3.preventDefault();
  score = score + 20
  questionsRight ++
  localStorage.setItem ("right", questionsRight);
  localStorage.setItem("score", score);
  question1.style.display = "none"
  question2.style.display = "inline"
})

for (let i =0; i < falseEl2.length; i++){
  falseEl2[i].addEventListener("click", function(nextq0){
      nextq0.preventDefault();
      question2.style.display = "none"
      question3.style.display = "inline"
    })
}

trueEl2.addEventListener("click", function(nextq3){
  nextq3.preventDefault();
  score = score + 20
  questionsRight ++
  localStorage.setItem ("right", questionsRight);
  localStorage.setItem("score", score);
  question2.style.display = "none"
  question3.style.display = "inline"
})

for (let i =0; i < falseEl3.length; i++){
  falseEl3[i].addEventListener("click", function(nextq0){
      nextq0.preventDefault();
      question3.style.display = "none"
      question4.style.display = "inline"
    })
}

trueEl3.addEventListener("click", function(nextq3){
  nextq3.preventDefault();
  score = score + 20
  questionsRight ++
  localStorage.setItem ("right", questionsRight);
  localStorage.setItem("score", score);
  question3.style.display = "none"
  question4.style.display = "inline"
})

for (let i =0; i < falseEl4.length; i++){
  falseEl4[i].addEventListener("click", function(nextq0){
      nextq0.preventDefault();
      question4.style.display = "none"
      question5.style.display = "inline"
    })
}

trueEl4.addEventListener("click", function(nextq3){
  nextq3.preventDefault();
  score = score + 20
  questionsRight ++
  localStorage.setItem ("right", questionsRight);
  localStorage.setItem("score", score);
  question4.style.display = "none"
  question5.style.display = "inline"
})

for (let i =0; i < falseEl5.length; i++){
  falseEl5[i].addEventListener("click", function(nextq0){
      nextq0.preventDefault();
      question5.style.display = "none"
      window.location = 'results.html';
    })
}

trueEl5.addEventListener("click", function(nextq3){
  nextq3.preventDefault();
  score = score + 20
  questionsRight ++
  localStorage.setItem ("right", questionsRight);
  localStorage.setItem("score", score);
  window.location = 'results.html';
})