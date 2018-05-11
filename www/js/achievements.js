
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function loadAnswers() {
	await sleep(2000);
	var user = [normalizeEmail(LoggedUser)];
	//var user = 'grawerjkgmailcom';
	if(user == null){
		console.log(user);
		return;
	}
	console.log(user);
	var path = createPath([user, "results", "choosing_words"]);
	console.log(path);
	appendAnswers(path);
	
}

function createProgressBar(correctAnswersPercentage){
	var elem = document.getElementById("progressBar"); 
	elem.style.width = correctAnswersPercentage + '%'; 
				
}



function appendAnswers(path){

	var correctAnswers = 0;
	var inCorrectAnswers = 0;
	var allAnswers = 0;
	var correctAnswersPercentage = 0;
	var refAnswers = getFromDb(path);
	refAnswers.on("value", function(snapshot) {
		correctAnswers = 0;
		inCorrectAnswers = 0;
		allAnswers = 0;
		correctAnswersPercentage = 0;
	
				snapshot.forEach(element => {
					
				if(element.val().answer == true){
					 correctAnswers += 1;
				} else { 
					inCorrectAnswers += 1;
				}
					allAnswers += 1;
				});
				console.log("correct:" + correctAnswers + "incorrect:" + inCorrectAnswers + "all:" + allAnswers);
				
				correctAnswersPercentage = (correctAnswers / allAnswers)*100;
				correctAnswersPercentage = (correctAnswersPercentage).toFixed(2);
				
				console.log("correctAnswersPercentage:" + correctAnswersPercentage);
				
				
				if (correctAnswersPercentage <= 50){
						$( "#noticeProgress" ).html('Musisz jeszcze popracować!');
					} else {
						$( "#noticeProgress" ).html('Świetnie Ci idzie!');
					}
				
				$( "#correctAnswersPercentage" ).html(correctAnswersPercentage + " %");
				$( "#correctAnswers" ).html(correctAnswers);
				$( "#inCorrectAnswers" ).html(inCorrectAnswers);
				$( "#allAnswers" ).html(allAnswers);
				
				createProgressBar(correctAnswersPercentage);	
	
			  } , function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			  });
			  
}


  

