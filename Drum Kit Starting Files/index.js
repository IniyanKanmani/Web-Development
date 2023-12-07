function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

function addListener(key, soundFile) {
    document.querySelector("." + key).addEventListener("click", () => {
        playSound(soundFile);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === key) {
            playSound(soundFile);
        }
    });
}

addListener("w", "./sounds/tom-1.mp3");
addListener("a", "./sounds/tom-2.mp3");
addListener("s", "./sounds/tom-3.mp3");
addListener("d", "./sounds/tom-4.mp3");
addListener("j", "./sounds/snare.mp3");
addListener("k", "./sounds/crash.mp3");
addListener("l", "./sounds/kick-bass.mp3");
