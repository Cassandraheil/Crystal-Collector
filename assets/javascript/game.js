$(document).ready(function(){
var wins = $("#wins")
var losses = $("#losses")


var goalNumber = 55
$("#goalNumber").text(goalNumber);
var counter = 0

var numberArray = [10, 2, 3, 7, 1];
// var randomNumber = numberArray[Math.round(Math.random())];
console.log(counter)
for (i = 0; i <  numberArray.length; i++){  
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", "https://images-na.ssl-images-amazon.com/images/I/41V8nsnhKVL._SX425_.jpg")
        crystal.attr("data-value", numberArray[i]);
        $("#crystals").append(crystal)    
 }

$(".crystal").on("click", function(){
    var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);
    console.log(this)

        counter += crystalValue;
        

        alert("your new score is " + counter )
        if (counter === goalNumber){
            alert("you win!");
        }
        else if (counter >= goalNumber){
            alert("you loose")
        }
});




// for (i = 0; i <  buttons.length; i++){

// }

})
