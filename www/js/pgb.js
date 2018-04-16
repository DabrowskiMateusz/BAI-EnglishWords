class DatabasePaths{
	wordLists = "WordLists";
	allUsers = "AllUsers";

	
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


// funkcja zapisująca dane do bazy firebase.

function addNewWord() {

		$( ".wordsrow" ).remove();
		
  firebase.database().ref('wordlists/' + $('#selectlist').val()).push({
	polish: $('#textarea1').val(),
	english:  $('#textarea2').val(),
  });
  showWordsList()
}
			
var wordsOutput = '';	// zmienna stworzona by pozniej przypisac do niej output z bazy
			
function showWordsList() {
	
	$( ".wordsrow" ).remove();
		
	var ref = firebase.database().ref();

	ref.on("value", function(snapshot) {
	}, function (error) {
	   console.log("Error: " + error.code);
	});	
	
	var refWordlists = firebase.database().ref('wordlists');
	
	refWordlists.child('Ludzie').on('value', function(snap){
			
		snap.forEach(function(childSnapshot2) {
			var snapshot = snap.val();
			var childSnapshot = childSnapshot2.val();

			
		$( "#wordstable" ).append("<tr class =\"wordsrow\"> <td>" + childSnapshot.polish + "</td> <td>"
		+ childSnapshot.english + "</td>  <td> <button value ="+childSnapshot2.key+"> edycja </button> </td> </tr> ");
		
		})
		
	})
	
}




