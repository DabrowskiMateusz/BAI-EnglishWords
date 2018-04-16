var wordLists = "WordLists";
var allUsers = "AllUsers";
var separator = "/";
var people = "Ludzie";
var fruit = "Owoce";
var animals = "Zwierzeta";
var world = "Swiat";

function createPath(rawPath){
	var path = "";
	rawPath.forEach(element => {
		path += element + separator;
	});
	return path;
}

function pushToDb(path, value){
	firebase.database().ref(path).push(value);
}

function getFromDb(path){
	var refWordlists = firebase.database().ref(path);
	var elements = [];
	
	refWordlists.on("value", function(snapshot) {

		snapshot.forEach(element => {
			var elem = {key: element.key, value: element.val()}
			elements.push(elem);
		});
	  }, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	  });
	  return elements;
}

function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}


function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function deviceInfo() {

	info =  'Device Model   : '    + device.model + '<br>' + 
			'Device Name    : '     + device.name + '<br>' + 
			'Device Cordova : '  + device.cordova + '<br>' + 
			'Device Platform: ' + device.platform + '<br>' + 
			'Device UUID    : '     + device.uuid + '<br>' + 
			'Device Version : '  + device.version + '<br>';

	document.getElementById("deviceDetails").innerHTML = info;	
}

function addNewWord() {
	$(".wordsrow").remove();
	var fieldsValues = {
		polish: $('#textarea1').val(),
		english:  $('#textarea2').val()
	  }
	
	var path = createPath([allUsers, wordLists, $('#selectlist').val()]);
	pushToDb(path, fieldsValues);
	$( ".wordsrow" ).remove();
  	showWordsList()
}
			
function showWordsList() {
	var path = createPath([allUsers, wordLists, $('#selectlist').val()]);
	var refWordlists = getFromDb(path);
	console.log(refWordlists);
	/*
	refWordlists.child('Ludzie').on('value', function(snap){
			
		snap.forEach(function(childSnapshot2) {
			var snapshot = snap.val();
			var childSnapshot = childSnapshot2.val();

			
		$( "#wordstable" ).append("<tr class =\"wordsrow\"> <td>" + childSnapshot.polish + "</td> <td>"
		+ childSnapshot.english + "</td>  <td> <button value ="+childSnapshot2.key+"> edycja </button> </td> </tr> ");
		
		
	})
	*/
	
}




