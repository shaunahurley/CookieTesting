window.onload = function() {
	// document.cookie = "completed=0";
	const skipTut= document.getElementById("skipTut");

	var name = "completed"
	var cookieVal = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	console.log(cookieVal[2]);

	document.getElementById('cookie').innerHTML = "Current value of completed cookie: " + cookieVal[2];

	// const startTut= document.getElementById("startTut");
	// startTut.addEventListener("click", tutorial());

}

function addCookie() {
	document.cookie = "completed=1"
	var name = "completed"
	var cookieVal = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	console.log(cookieVal[2]);

	document.getElementById('cookie').innerHTML = "Current value of completed cookie: " + cookieVal[2];
}

function tutorial() {
	const popupEl = document.getElementById("popup");
	popupEl.classList.add("move");
	popupEl.classList.add("talkbubble");
	console.log("tutorial started")
}

function reset() {
	document.cookie = "completed=0"
	var name = "completed"
	var cookieVal = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	console.log(cookieVal[2]);

	document.getElementById('cookie').innerHTML = "Current value of completed cookie: " + cookieVal[2];
	const popupEl = document.getElementById("popup");
	popupEl.classList.remove("move");
	console.log("here2")
}
