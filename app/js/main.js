let addBallButton = document.getElementsByClassName("addBall")[0];
let removeBallButton = document.getElementsByClassName("removeBall")[0];

let ballsLineElem = document.getElementsByClassName('ballsLine')[0];
let ballTemplate = document.querySelector(".ballElement.template");

//One array to rule them all (Balls)
let ballsArray = Array.prototype.slice.call(document.querySelectorAll(".ballElement:not(.template)"));

let colors = ["crimson", "yellowgreen", "green", "purple"];

/*Code----------------------------------------------*/
initBalls();

addBallButton.addEventListener('click', function() {
	addBall();
})
removeBallButton.addEventListener('click', function() {
	removeBall();
})

function addBall(amount = 1) {
	for(let i = 0;i<amount;i++) {
		if (ballsArray.length > 10) return;

		let clone = ballTemplate.cloneNode(true);
		let cloneBall = clone.querySelector('.ball');

		clone.classList.remove("template");
		if ((ballsArray.length+1) % 2 == 0) {
			cloneBall.classList.add("even");
		}
		cloneBall.classList.add(getRandomColor());

		ballsArray.push(clone);
		ballsLineElem.append(clone);
	}
}
function removeBall() {
	if (ballsArray.length < 2) return;

	ballsArray.pop().remove();
}
function initBalls() {
	addBall(randomIntFromInterval(1,4));
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomColor() {
	return colors[randomIntFromInterval(0, colors.length-1)];
}