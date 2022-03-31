// alert("Hello, world!");

function bigger() {
	hello();
	document.getElementById("words").style.fontSize="24pt";
}

function hello() {
	alert("Hello World!");
}

function fancy() {
	var words = document.getElementById("words");
	
	if (document.getElementById("fancy").checked) {
		words.style.fontWeight = "bold";
		words.style.color = "blue";
		words.style.textDecoration = "underline";
	} else {
		words.style.fontWeight = "normal";
		words.style.color = "black";
		words.style.textDecoration = "none";
	}
}

function moo() {
	document.getElementById("words").value = document.getElementById("words").value.split(".").join("-Moo");
}