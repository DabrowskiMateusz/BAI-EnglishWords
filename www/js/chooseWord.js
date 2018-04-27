
$(document).ready(function() { 
    loadNextWordToChoose();
}); 

var currentValues;

function nextWord(){
    loadNextWordToChoose();
}

function loadNextWordToChoose(){

    if($("#nextWordButton").text()=='Sprawdź'){
        var selected =  $("#selectWordCheckList :radio:checked").prop("id");
        var labelVal = $("label[for='"+ selected +"']").html();

        if(labelVal == currentValues[0][1]){
            $("#chooseWordResult").html("Dobra odpowiedź!");
        }
        else{
            $("#chooseWordResult").html("Zła odpowiedź, prawidłowe tłumaczenie to: " + currentValues[0][1]);
        }

        $("input[type='radio']").attr("checked",false).checkboxradio("refresh");
        $("#nextWordButton").text('Następne');
    }
    else {
        currentValues = getNextSelection();
        $("#chooseWord").html(currentValues[0][0]);
    
        var options = [];
        options.push($("#first-option"));
        options.push($("#second-option"));
        options.push($("#third-option"));
        options.push($("#forth-option"));
    
        var goodAnswer = Math.floor((Math.random() * 4));
    
        options[goodAnswer].html(currentValues[0][1]);
        options.splice(goodAnswer, 1);
    
        var index = 1;
        options.forEach(element => {
            element.html(currentValues[index]);
            index++;
        });
    
        $("#nextWordButton").text('Sprawdź');
        $("#chooseWordResult").html("");
    }
}

function getNextSelection(){
    var category = $('#selectlistChooseWord').val();
    var path = createPath([allUsers, wordLists, category]);
	var refWordlists = getFromDb(path);
	var pairs = [];
	refWordlists.on("value", function(snapshot) {
				snapshot.forEach(element => {
                    pairs.push([element.val().polish, element.val().english]);
				});
			  }, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			  });

    var numberOfWords = pairs.length;
    var wordPairNumber = Math.floor((Math.random() * numberOfWords));
    var selectedValues = [];
    selectedValues.push(pairs[wordPairNumber]);
    pairs.splice(wordPairNumber, 1);
    selectedValues.push(getNextRandomIncorrect(pairs));
    selectedValues.push(getNextRandomIncorrect(pairs));
    selectedValues.push(getNextRandomIncorrect(pairs));
    return selectedValues;
}

function getNextRandomIncorrect(pairs){
    var numberOfWords = pairs.length;
    var wordPairNumber = Math.floor((Math.random() * numberOfWords));
    var incorrectValue = pairs[wordPairNumber][1];
    pairs.splice(wordPairNumber, 1);
    return incorrectValue;
}