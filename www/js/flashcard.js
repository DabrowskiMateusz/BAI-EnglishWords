$("#card").flip({
    axis: 'y',
    trigger: 'manual'
  });

$(document).ready(function() { 
    loadNextWordPair();
}); 

function flashcardClick(){
    var flip = $("#card").data("flip-model");
    if(flip.isFlipped){
        $("#card").flip(false);
        loadNextWordPair();
    }
    else{
        $("#card").flip(true);
    }
}

function loadNextWordPair(){
    var pair = getRandomWordPair();
    $("#frontContent").html("<div class='flashcardText'>"+ pair[0] +"</div>");
    $("#backContent").html("<div class='flashcardText'>"+ pair[1] +"</div>");
    return pair;
}

function getRandomWordPair(){
    var pairs = [['marchewka', 'carrot'],['mysz', 'mouse'],['koń', 'horse'],['jabłko', 'apple'],['banan', 'banana']];
    var numberOfWords = pairs.length;
    var wordPairNumber = Math.floor((Math.random() * numberOfWords));
    var selectedPair = pairs[wordPairNumber];
    return selectedPair;
}