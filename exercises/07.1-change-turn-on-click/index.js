var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};

window.turnChanger = function turnChanger() {
	if (currentUser == "Juan" || currentUser == "Josh") {
		currentUser = "Mario";
	} else if (currentUser == "Mario") {
		currentUser = "Josh";
	} else {
		currentUser = "Juan";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};
