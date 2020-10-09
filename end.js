const username = document.getElementById('username');
	
const saveScoreBtn = document.getElementById('saveScoreBtn');

const finalScore = document.getElementById('finalScore');

const mostRecentScore = localStorage.getItem('mostRecentScore');



const maximumScores = JSON.parse(localStorage.getItem('maximumScores')) || [];



const MAX_HIGH_SCORES = 5;



finalScore.innerText = mostRecentScore;



username.addEventListener('keyup', () => {

saveScoreBtn.disabled = !username.value;

});



savemaximumScore = (e) => {

e.preventDefault();



const score = {

score: mostRecentScore,

name: username.value,

};

maximumScores.push(score);

maximumScores.sort((a, b) => b.score - a.score);

maximumScores.splice(5);



localStorage.setItem('highScores', JSON.stringify(maximumScores));

window.location.assign('/');

};
