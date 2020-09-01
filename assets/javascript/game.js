$(document).ready(function(){
    var counter = 0
    var losses = 0
    var wins = 0 
    var number = 4

    $("#losses").html("Losses: "+ losses)
    $("#wins").html("Wins: "+ wins)


    $("#easyBtn").on("click", easyMode);
    $("#hardBtn").on("click", hardMode);

    function easyMode(){
        console.log("easy mode bitch")
        number = 4
    }
    function hardMode(){
        number = 8
        console.log("this shit be haaaaard")
    }
    
    var goalNumber = Math.floor(Math.random()* 101 + 1) 
            $("#goalNumber").text(goalNumber + 19);
            console.log(goalNumber)


    var randomNumber = Math.round(Math.random()* 11 + 1);

        
    for (i = 0; i < number; i++){  
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", "https://images-na.ssl-images-amazon.com/images/I/41V8nsnhKVL._SX425_.jpg"); 
                
        crystal.attr("data-value", randomNumber);
        randomNumber = Math.round(Math.random()* 11 + 1)

        $("#crystals").append(crystal); 
        }


    

    $(".crystal").on("click", function(){
        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);
        

            counter += crystalValue;
        

            alert("your new score is " + counter )
            if (counter === goalNumber + 19){
                alert("You Win! :)");
                wins ++;
                $("#wins").html("Wins: "+ wins)
                reset()
            }
            else if (counter >= goalNumber + 19){
                alert("You Lose :(")
                losses ++;
                $("#losses").html("Losses: "+ losses) 
            reset()
            }        
    });

function reset(){
        var goalNumber = Math.floor(Math.random()* 101) 
            $("#goalNumber").text(goalNumber + 19);
            console.log("this just reset")
            counter =0

        var numberArray = [12, 1, 4, 8, 9, 3, 4];
        
        for (i = 0; i <  numberArray.length; i++){  
                crystal.attr("data-value", numberArray[i]);
                $("#crystals").append(crystal)    
        }
    }

        

})
