function calculate(type){
		var numberOne = parseInt($("#numberOne").val());
		var numberTwo = parseInt($("#numberTwo").val());
		console.log(numberOne, numberTwo);
		var answer;

		if(type == "add"){
			answer = add(numberOne, numberTwo);
		}
		else if(type == "subtract"){
			answer = subtract(numberOne, numberTwo);
		}
		
		console.log(answer);
	}

function add (a,b){
	var c;
	c = a + b;
	return c;
}

function subtract (a,b){
	var c;
	c = a - b;
	return c;
}