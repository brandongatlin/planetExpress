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
var nextDeparture = ""
var minutesAway = ""


$("#submit").on("click", function() {
    event.preventDefault();

    craftName = $("#craftNameBox").val().trim();
    craftDestination = $("#destinationBox").val().trim();
    nextDeparture = $("#departureBox").val().trim();
    craftFrequency = $("#frequencyBox").val().trim();
    minutesAway = ""

    database.ref().push({
        craftName: craftName,
        craftDestination: craftDestination,
        craftFrequency: craftFrequency,
        nextDeparture: nextDeparture,
        minutesAway: minutesAway

    })
    database.ref().once("child_added", function(snapshot) {

        var craftName = (snapshot.val().craftName);
        var craftDestination = (snapshot.val().craftDestination);
        var craftFrequency = (snapshot.val().craftFrequency);
        var nextDeparture = (snapshot.val().nextDeparture);
        console.log(snapshot.val());

        // why the hell is this printing twice?!!!! //
        $("#table").append("<tr><td>" + craftName + "</td><td>" + craftDestination + "</td><td>" + nextDeparture + "</td><td>" + craftFrequency + "</td></tr>");

        $("#craftNameBox").val("");
        $("#destinationBox").val("");
        $("#departureBox").val("");
        $("#frequencyBox").val("");

        console.log(craftName)


    })

});