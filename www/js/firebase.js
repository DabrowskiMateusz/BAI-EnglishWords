var config = {
	apiKey: "AIzaSyDOk8k-hlJTnNxqdHB4qSc7_XEey52Csy8",
	authDomain: "englishwords-10e45.firebaseapp.com",
	databaseURL: "https://englishwords-10e45.firebaseio.com",
	projectId: "englishwords-10e45",
	storageBucket: "englishwords-10e45.appspot.com",
	messagingSenderId: "244487661018"
};
firebase.initializeApp(config);

var database = firebase.database();

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
	return refWordlists;
}