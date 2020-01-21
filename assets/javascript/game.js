$(document).ready(function(){
    var counter = 0
    var losses = 0
    var wins = 0 
    $("#losses").html("Losses: "+ losses)
    $("#wins").html("Wins: "+ wins)

    
    var goalNumber = Math.floor(Math.random()* 101 + 1) 
            $("#goalNumber").text(goalNumber + 19);
            console.log(goalNumber)


        var randomNumber = Math.round(Math.random()* 11 + 1);
        
        for (i = 0; i < 5; i++){  
                var crystal = $("<img>");
                crystal.addClass("crystal");
                crystal.attr("src", "https://images-na.ssl-images-amazon.com/images/I/41V8nsnhKVL._SX425_.jpg"); //possibly get differrent imagaes from folder instead of internet
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
                alert("you win!");
                wins ++;
                $("#wins").html("Wins: "+ wins)
                reset()
            }
            else if (counter >= goalNumber + 19){
                alert("you lose")
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

        var numberArray = [12, 1, 4, 8, 9];
        
        for (i = 0; i <  numberArray.length; i++){  
                crystal.attr("data-value", numberArray[i]);
                $("#crystals").append(crystal)    
        }
    }

        

})
