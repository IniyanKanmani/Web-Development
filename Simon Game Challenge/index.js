var level = 0;
var colors = ["green", "red", "yellow", "blue"];
var colorStack = [];
var index = 0;

function getARandomColor() {
    return colors[Math.floor(Math.random() * 4)];
}

function playSound(sound) {
    var audio = new Audio("./sounds/" + sound + ".mp3");
    audio.play();
}

function animateColor(color) {
    $("#" + color)
        .fadeOut(100)
        .fadeIn(100);
    playSound(color);
}

function animateUserClick(id, className) {
    $(id).addClass(className);

    setTimeout(function () {
        $(id).removeClass(className);
    }, 100);
}

function levelUp() {
    index = 0;
    level += 1;
    $("#level-title").text("Level " + level);
    var currentColor = getARandomColor();
    animateColor(currentColor);
    colorStack.push(currentColor);
}

function gameOver() {
    index = 0;
    level = 0;
    animateUserClick("body", "game-over");
    playSound("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    colorStack = [];
}

function listenToUserInput() {
    $("div > div > div").on("click", function () {
        if (level != 0) {
            var userColor = $(this).attr("id");
            if (colorStack[index] === userColor) {
                playSound(userColor);
                animateUserClick("#" + userColor, "pressed");
                if (index < colorStack.length - 1) {
                    index++;
                } else {
                    setTimeout(function () {
                        levelUp();
                    }, 1000);
                }
            } else {
                gameOver();
            }
        }
    });
}

$(document).on("keypress", function (event) {
    if (level === 0) {
        levelUp();
    }
});

listenToUserInput();
