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
	
	var now             = new Date().getTime(),
    _5_sec_from_now = new Date(now + 5*1000);
	
function notification() {
	var hours = ($( "#selectedHour" ).val());
	var howoften =  (($( "#selectedHowOften" ).val()) * 60);
	var date = new Date(year, month, day, hours);
	var dateNow = new Date().getTime();
		console.log(year);
		console.log(month);
		console.log(day);
		console.log(date);
		console.log(hours);
		console.log(howoften);
		console.log(dateNow);
		cordova.plugins.notification.local.schedule({
		id: 1,
		title: "Message Title",
		text: "Message Text",
		at: _5_sec_from_now, // firstAt and at properties must be an IETF-compliant RFC 2822 timestamp
		every: howoften, // this also could be minutes i.e. 25 (int)
		data: { meetingId:"123#fg8" }
});


}