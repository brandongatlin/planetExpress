// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtXSmCAdx6puEAfvwr7I5kxv_1JEBj6_s",
    authDomain: "trainschedule-d611e.firebaseapp.com",
    databaseURL: "https://trainschedule-d611e.firebaseio.com",
    projectId: "trainschedule-d611e",
    storageBucket: "",
    messagingSenderId: "1026338878177"
};

firebase.initializeApp(config);

var database = firebase.database();

var craftName = ""
var craftDestination = ""
var craftFrequency = ""
var firstDeparture = ""
var minutesAway = ""


$("#submit").on("click", function() {
    event.preventDefault();

    craftName = $("#craftNameBox").val().trim();
    craftDestination = $("#destinationBox").val().trim();
    firstDeparture = $("#firstDepartureBox").val().trim();
    craftFrequency = $("#frequencyBox").val().trim();
    minutesAway = ""

    database.ref().push({
        craftName: craftName,
        craftDestination: craftDestination,
        craftFrequency: craftFrequency,
        firstDeparture: firstDeparture,
        minutesAway: minutesAway

    })


})


database.ref().on("child_added", function(snapshot) {

    var craftName = (snapshot.val().craftName);
    var craftDestination = (snapshot.val().craftDestination);
    var craftFrequency = (snapshot.val().craftFrequency);
    var firstDeparture = (snapshot.val().firstDeparture);
    console.log(snapshot.val());

    $("#table").append("<tr><td>" + craftName + "</td><td>" +
        craftDestination + "</td><td>" + firstDeparture + "</td><td>" +
        craftFrequency + "</td><td>" + minutesAway + "</td></tr>");

    $("#craftNameBox").val("");
    $("#destinationBox").val("");
    $("#departureBox").val("");
    $("#frequencyBox").val("");

    console.log(craftName)

});

// time code
var now = moment();
console.log(now)

var stringTime = moment().format("YYYY-MM-DD");



// from tutoring
//Creates a string of current date YYYY-MM-DD
		var stringTime = moment().format("YYYY-MM-DD");

		//if we have some in 24 hour time as string
		var firstTrain = (firstDeparture);

		//creats a moment.js object with current date and time of firstTrain 
		//can also use " ". ex 2013-02-08 24:00 or 2013-02-08T24:00
		var test2 = moment(stringTime + "T" + firstTrain);  
		console.log(test2)

		// displays  12 hour time (hh:mm) and AM or PM
		console.log("test2: " + test2.format("HH:MM"));

		//displays  Month Day 12 hour time (hh:mm) and AM or PM
		console.log(test2.format("MM DD HH:MM"));	

		// Gets us current date and time;
		var now = moment();
		console.log("now:", now.format("HH:MM")); 

		
		// set date/ by string-format
		var day = moment("1995-12-25", "YYYY-MM-DD"); 
		console.log("day:", day.format("MM DD YYYY"));


		//Get DIFFERENCT BETWEEN TIMES		
		var diff = now.diff(test2, "minutes");
		console.log("diff in minutes:", diff);

//Calculates and returns time of next train arrival.
function getNextArrival(firstDeparture, frequency) {
    //Initilizes to first train time.
    var nextArrival = moment(firstDeparture);

    //While nextArrival is less than current time, add train frequency to nextArrival;
    while (nextArrival < moment()) {
        nextArrival.add(frequency, "minutes");
    };

    return nextArrival;

} //END getNextArrival

function getMinutesAway(time) {
    //Returns the difference in minutes bewteen trains next arrival and currrnt time.
    //.diff() always rounds toward zero (down if pos.) so 1.59 would be 1 minute.
    //adding 'true' argument returns floating point.
    //Which I round using Math.round so 1.59 would round up to 2.

    var minutesAway = Math.round(getNextArrival(time).diff(moment(), "minutes", true));

    return minutesAway

} //END getMinutesAway