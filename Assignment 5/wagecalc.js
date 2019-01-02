function wageCalc(){
	var s = parseFloat(document.getElementById("hourly-salary").value);
	var w = parseFloat(document.getElementById("hours-per-week").value);
	var a = s * w * 52;
	var z;

	if(a < 20000){
		z = "This salary is too little.";
	}
	else if(a > 20000 && a < 25000){
		z = "This salary is almost enough. Let's negotiate.";
	}
	else{
		z = "This salary is great!";
	}

	document.getElementById("annual-salary").innerHTML="The salary is $" + a + ". " + z;
}
function validation(){
	var x = document.getElementById("hourly-salary").value;
	var y = document.getElementById("hours-per-week").value;

	if(x==""){
		alert("Please fill in salary");
		return false;
	}
	else if(y==""){
		alert("Please fill in the amount of hours you work per week.")
	}
}