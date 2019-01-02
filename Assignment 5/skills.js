function skills(){
	var z = document.getElementById("skill").value;
	var x = 0;
	var array = ["Create specialty coffee beverages", "Bake goods", "Operate a cash register", "Provide good customer service", "Open and close store"];
	var text = "";
	while(x < z){
		text += array[x] + "<br>";
		document.getElementById("input").innerHTML = text;

		x++;
	}
}
function duties(){
	var a = document.getElementById("duty").value;
	var b = 0;
	var list = ["Fill the floor with merchandise", "Handle money", "Operate a cash register", "Provide good customer service", "Open and close store"];
	var text = "";
	while(b < a){
		text += list[b] + "<br>";
		document.getElementById("para").innerHTML = text;

		b++;
	}
}