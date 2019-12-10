

let secondsLeft = JSON.parse(localStorage.getItem("time"));
let score = JSON.parse(localStorage.getItem("score"));
let questionsRight = JSON.parse(localStorage.getItem("right"));
let submitButton = document.getElementById("name");
let name = document.getElementById("name1");

console.log(secondsLeft)
console.log(score)
console.log(questionsRight)

totalScore  = score + secondsLeft
console.log(totalScore)

document.getElementById("time").innerHTML = "Time Left: " + secondsLeft 
document.getElementById("questionsRight").innerHTML= "All done! You answered " + questionsRight + " of 5 questions right."
document.getElementById("finalScore").innerHTML= "Your final score is " + totalScore

submitButton.addEventListener("click", function(nextpage3){
    nextpage3.preventDefault();
    var newR ={
        name: name.value,
        score: totalScore
    }
    console.log(newR)
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    highScores.push(newR)
    localStorage.setItem("highscores", JSON.stringify(highScores));
    //localStorage.setItem("name", name);
    window.location = 'highScores.html';
    // get elem fromthe local storage parse to hve an array
    // puhs the new objet into the array
    // save the localstorage
})