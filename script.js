var saveInfoBtn = document.querySelectorAll("#saveInfoBtn");
var timeBox = document.querySelectorAll("#timeBox");
var eventInfo = document.querySelectorAll("#eventInfo");


var date = moment().format('MMMM Do YYYY');;
$("#currentDay").text(date);

var time = moment().format('LT');
$("#currentTime").text(time);


$("#timeBlock" ).change(function() {
    var present = moment(time).isSame('LT');
    $("#timeBlock").css("background-color","yellow");
});

$( "#timeBlock" ).change(function() {
    var future = moment().isAfter(time);
    $("#timeBlock").css("background-color","white");
});

$( "#timeBlock" ).change(function() {
    var past = moment().isBefore(time);
    $("#timeBlock").css("background-color","blue");
});

var eventInfo = document.querySelectorAll("#eventInfo").value;


var savedInfo = localStorage.getItem("eventInfo")

$(document).ready(function() {

    $("button").on("click", function() {
        localStorage.setItem("eventInfo", eventInfo);
        
        
      });

    });


