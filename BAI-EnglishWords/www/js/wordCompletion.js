
function checkValue(){


	const tab3 = ['decorate','send','have','watch','weekend'];

	var status="";
	var valueFromFirstInput = document.getElementById("firstCompletion").value;
	var valueFromSecondInput = document.getElementById("secondCompletion").value;
	var valueFromThirdInput = document.getElementById("thirdCompletion").value;
	var valueFromFourInput = document.getElementById("fourCompletion").value;
	var valueFromFiveInput = document.getElementById("fiveCompletion").value;
	
	

	
	if(valueFromFirstInput===tab3[0]){

		status="Poprawnie!"
	}else {
		status="Nie poprawnie!"
	}
	
	document.getElementById('firstCompletion').value = valueFromFirstInput +" "+ status;


	if(valueFromSecondInput===tab3[1]){

		status="Poprawnie!"
	}else {
		status="Nie poprawnie!"
	}
	
	document.getElementById('secondCompletion').value = valueFromSecondInput +" "+ status;

	if(valueFromThirdInput===tab3[2]){

		status="Poprawnie!"
	}else {
		status="Nie poprawnie!"
	}
	
	document.getElementById('thirdCompletion').value = valueFromThirdInput +" "+ status;

	if(valueFromFourInput===tab3[3]){

		status="Poprawnie!"
	}else {
		status="Nie poprawnie!"
	}
	
	document.getElementById('fourCompletion').value = valueFromFourInput +" "+ status;

	
	



}