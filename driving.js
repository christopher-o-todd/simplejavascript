let age = parseInt(prompt("What is your age?"));

if (age < 18){
	alert("You are too young to drive");
} else if (age == 18){
	alert("Congratulations on your first year of driving");
} else {
	alert("Powering on. Enjoy the ride");
}

function checkDriverAge(){
	age = prompt("What's your age?");
}
