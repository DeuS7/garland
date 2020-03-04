let addBallButton = document.getElementsByClassName("addBall")[0];
let removeBallButton = document.getElementsByClassName("removeBall")[0];

let ballsLineElem = document.getElementsByClassName('ballsLine')[0];
let ballTemplate = document.querySelector(".ballElement.template");

//One array to rule them all (Balls)
let ballsArray = Array.prototype.slice.call(document.querySelectorAll(".ballElement:not(.template)"));

addBallButton.addEventListener('click', function() {
	addBall();
})
removeBallButton.addEventListener('click', function() {
	removeBall();
})

function addBall() {
	if (ballsArray.length > 10) return;

	let clone = ballTemplate.cloneNode(true);
	clone.classList.remove("template");

	if ((ballsArray.length+1) % 2 == 0) {
		clone.querySelector('.ball').classList.add("even");
	}

	ballsArray.push(clone);
	ballsLineElem.append(clone);
}
function removeBall() {
	if (ballsArray.length < 2) return;

	ballsArray.pop().remove();
}