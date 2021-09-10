var colors = ["green", "red", "blue", "yellow"];

var gamePattern = [];
var userPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextLevel();
    started = true;
  }
});

$(".btn").click(function() {

  var userColor = $(this).attr("id");
  userPattern.push(userColor);

  playSound(userColor);
  animatePress(userColor);

  checkAnswer(userPattern.length - 1);
});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userPattern[currentLevel]) {

    console.log("success");

    if (userPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextLevel();
      }, 1000);
    }

  } else {

    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }

}

function nextLevel() {

  userPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var random = Math.floor(Math.random() * 4);
  var randomColor = colors[random];
  gamePattern.push(randomColor);

  $("#" + randomColor).animate({
    opacity: "0.2"
  }, 100).animate({
    opacity: "1"
  }, 100);
  playSound(randomColor);
}

function playSound(sound) {
  var audio = new Audio("sounds/"+ sound + ".mp3");
  audio.play();
}

function animatePress(color) {
  $("#" + color).addClass("pressed");

  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function startOver() {

  level = 0;
  gamePattern = [];
  started = false;
}
