


//var targetNumber = 0;
// $("numberToGuess").text(targetNumber);
// var counter = 0;

// var numberOptions = [10, 5, 3, 7];
// for (var i =0; i < numberOptions.length; i++) {
//    var imageCrystal = $("<img>");
//    imageCrystal.addClass("Crystals");
//    Crystals.attr("data-crystalvalue", numberOptions[i]);
//    $("Crystals").append(Crystals);
//    $("Crystals").on("click", function()) {

//        var data-crystalvalue = ($(this).data("crystalvalue"));
//       counter +=crystalvalue;
//        alert("Wins:  " + counter);
//        of (counter === targetNumber) {
//           alert("You Win!");
//           else if (counter >= targetNumber) {
//               alert("You lose!!");
//            }
//       }
//    }
// }
  
//    var randomNumber 

//    $(document).ready(function() {

//        function getRandomInt(min, max) {
//            return Math.floor((Math.random() * max) + min);
//     }

//              console.log(getRandomInt(1, 99));
//       })

//   document.body.onekeyup = function(e) {
//       if(e.keyCode == 32) {
//      }
//   }

// $("#crystal1").on("click", function() {
// 	var count = 0;
// }

// $(document).ready(function() {
//	4("p").click(function() {
//		alert("9");
//	});
// });


$(document).ready(function() {
console.log("line56");
	
	$("#crystal1").append('<img src=images/crystal1.jpg>');
$("#crystal1").click(function(){	
	alert("10");
});

	$("#crystal2").append('<img src=images/crystal2.jpg>');
$("#crystal2").click(function(){	
	alert("5");
});

	$("#crystal3").append('<img src=images/crystal3.jpg>');
$("#crystal3").click(function(){	
	alert("3");
});

	$("#crystal4").append('<img src=images/crystal4.jpg>');
$("#crystal4").click(function(){	
	alert("7");
});

//set initial variables>

var Wins = 0
var Loses = 0

Total = 0

//randomly generated goal 

var goal = Math.floor(Math.random() * 99) + 1

// randomly generated crystal values

var count1 = Math.floor(Math.random() * 1) + 1
var count2 = Math.floor(Math.random() * 1) + 1
var count3 = Math.floor(Math.random() * 1) + 1
var count4 = Math.floor(Math.random() * 1) + 1

//display inital stats

$("#goal").html(goal);
$("#wins").html(goal);
$("#losses").html(goal);
$("#totalgames").html(goal);

function reset () {

score = 0;
goal = Math.floor(Math.random() * 99) + 1;
count1 = Math.floor(Math.random() * 1) + 1;
count2 = Math.floor(Math.random() * 1) + 1;
count3 = Math.floor(Math.random() * 1) + 1;
count4 = Math.floor(Math.random() * 1) + 1;

//reset display of goals and score

$("#goalVal").html(goal);
$("#scoreVal").html(score);
};

//increase score and check

function collect() {

    //goal not reached,  play on
   
    if ((score) < (goal)) {
        $("#scoreVal").html(score);
    
    //passed goal, loss condition 
    //log score, record and alert loss, reset
   
    } else if ((score) > (goal)) {
        $("#scoreVal").html(score);
        losses++;
        $("#losses").html(losses);
        alert("you lose");
        reset();

         } else {
        $("#scoreVal").html(score);
        wins++; 
        $("#wins").html(wins);
        alert("you win");
        reset();
    }

//var score =score + count1

$("#crystal1").on("click", function() {
	score += count1
	$("#scoreVal").html(score);
});

$("#crystal2").on("click", function() {
	score += count2
	$("#scoreVal").html(score);
});

$("#crystal3").on("click", function() {
	score += count3
	$("scoreVal").html(score);
});

$("#crystal4").on("click", function() {
	score += count4
	$("scoreVal").html(score);
});

}
});

