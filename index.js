//alert("welcome");
var buttonColors= ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level = 0;
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        newSequence();
        started=true; 
    } 
});
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]=== gamePattern[currentLevel]){
        //alert("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                newSequence();
            }, 1000);
        }
    }
    else {
        //alert("wrong");
        gameOver();
        Restart();
    }
}


function newSequence(){
    userClickedPattern=[];
    level = level + 1;
    $("#level-title").text("level "+ level);
    randomNumber = Math.floor(Math.random() * 3);
    var radomChosenColor= buttonColors[randomNumber];
    gamePattern.push(radomChosenColor);
    $("#"+ radomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(radomChosenColor);
    
    
}
function playSound(name){
    var audio11 = new Audio("sounds/" + name + ".mp3");
    audio11.play();
}
function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
    },100);
}
function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over")
    },200);
    gameOverSound();
    $("h1").text("Game Over, Press Any Key to Restart");

    /* var started= false;
    $(document).keypress(function(){
        if(!started){
            $("#level-title").text("Level " + level);
            newSequence();
            started=true; 
        } 
    }); */

}
function gameOverSound(){
    var  audio = new Audio("sounds/wrong.mp3");
    audio.play();
}
function Restart(){
    level = 0;
    started=false;
    gamePattern=[];
}


