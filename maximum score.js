const maximumScoresList = document.getElementById("maximumScoresList");

const maximumScores = JSON.parse(localStorage.getItem("maximumScores")) || [];



maximumScoresList.innerHTML = highScores

.map(score => {

return `<li class="high-score">${score.name} - ${score.score}</li>`;

})

.join("");
