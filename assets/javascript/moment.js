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

// var craftName = ""
// var craftDestination = ""
// var craftFrequency = ""
// var nextDeparture = ""
// var minutesAway = ""

$("#submit").on("click", function() {
    event.preventDefault();

    var craftName = $("#craftNameBox").val().trim();
    var craftDestination = $("#destinationBox").val().trim();
    var nextDeparture = $("#departureBox").val().trim();
    var craftFrequency = $("#frequencyBox").val().trim();
    var minutesAway = ""

database.ref().set({
            craftName: craftName,
            craftDestination: craftDestination,
            craftFrequency: craftFrequency,
            nextDeparture: nextDeparture,
            minutesAway: minutesAway

        })

    database.ref().on("value", function(snapshot) {


        // why the hell is this printing twice?!!!! //
        $("#table").append("<tr><td>" + craftName + "</td><td>" + craftDestination + "</td><td>" + nextDeparture + "</td><td>" + craftFrequency + "</td></tr>");

        $("#craftNameBox").val("");
        $("#destinationBox").val("");
        $("#departureBox").val("");
        $("#frequencyBox").val("");

        console.log(craftName)

        
    })

});