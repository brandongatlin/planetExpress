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
var craftFrequency = 0
var nextDeparture = ""
var minutesAway = 0

$("#submit").on("click", function() {
    event.preventDefault();

    var craftName = $("#craftNameBox").val().trim();
    craftDestination = $("#destinationBox").val().trim();
    nextDeparture = $("#departureBox").val().trim();
    craftFrequency = $("#frequencyBox").val().trim();

    database.ref().on("value", function(snapshot) {

$("#table").text(snapshot.val().craftName);


    $("#craftNameBox").val("");
    $("#destinationBox").val("");
    $("#departureBox").val("");
    $("#frequencyBox").val("");

    database.ref().set({
        craftName: craftName,
        craftDestination: craftDestination,
        craftFrequency: craftFrequency,
        nextDeparture: nextDeparture,
        minutesAway: minutesAway



})
  })

    });



