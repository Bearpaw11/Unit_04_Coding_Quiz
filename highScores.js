var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
//var olTag = document.getElementById("scoresList")


highScores.sort(function(a, b) {
    return b.score - a.score;
  });


console.log("---", highScores)

// ternary
var len = 0
if (highScores.length < 10){
len = highScores.length
}
else{
    len = 10
}
//   true : false
// var len = highScores.length < 10 ? highScores.length : 10

for(var i=0; i < len; i++){
    var person = highScores[i]
    console.log(person)

    var liTag = document.createElement("li")
    liTag.textContent = person.name + " - " + person.score
    var olTag = document.getElementById("scoresList")
    olTag.appendChild(liTag)


}

// for(var i=0; i < len; i++){
//     var person = highScores[i]
//     console.log(person)

//     var liTag = document.createElement("li")
//     liTag.textContent = person.name + " - " + person.score
//    // var liTag= `<li>${person.name} - ${person.score} </li> `

//     var olTag = document.getElementById("scoresList")
//     olTag.appendChild(liTag)
//     // $("#scoresList").append(liTag)

//     // $("#scoresList").append(<li>${person.name} - ${person.score} </li> `)


// }

document.getElementById("clearHighScores").addEventListener("click", function()
{
    console.log("hello")
    window.localStorage.removeItem("highscores")
    window.location.reload()
})