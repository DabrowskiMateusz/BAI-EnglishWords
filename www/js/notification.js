document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	
	
}
 $.fn.nval = function() {
   return Number(this.val())
};

	var d = new Date();
	var y = d.getFullYear();
	var m = d.getMonth();
	var today = d.getDate();
	var year = y; 
	var month = m;  
	var day =  today;
	
	
	
function notification() {
	var hours = ($( "#selectedHour" ).val());
	var howoften =  (($( "#selectedHowOften" ).val()) * 60);
	var date = new Date(year, month, day, hours);
	var dateNow = new Date();
		console.log(year);
		console.log(month);
		console.log(day);
		console.log(date);
		console.log(hours);
		console.log(howoften);
		console.log(dateNow);
		cordova.plugins.notification.local.schedule({
			id: 1,
			title: "Production Jour fixe",
			text: "Duration 1h",
			firstAt: monday_9_am,
			every: "week",
			sound: "file://sounds/reminder.mp3",
			icon: "http://icons.com/?cal_id=1",
			data: { meetingId:"123#fg8" }
});


}