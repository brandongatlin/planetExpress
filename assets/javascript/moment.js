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
var craftFrequency
var nextDeparture
var minutesAway

$("#submit").on("click", function() {
            event.preventDefault();

            craftName = $("#craftName").val().trim();
            craftDestination = $("#destination").val().trim();
            nextDeparture = $("#departure").val().trim();
            craftFrequency = $("#frequency").val().trim();

            $("#craftName").val("");
            $("#destination").val("");
            $("#departure").val("");
            $("#frequency").val("");

            database.ref().on("child_added", function(snapshot) {
                var craftName = snapshot.val().craftName;
console.log(snapshot)

});

            })