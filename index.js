function play_drum(key_symbol) {

    var drum_sounds = {
        "w":"./sounds/tom-1.mp3",
        "a":"./sounds/tom-2.mp3",
        "s":"./sounds/tom-3.mp3",
        "d":"./sounds/tom-4.mp3",
        "j":"./sounds/snare.mp3",
        "k":"./sounds/crash.mp3",
        "l":"./sounds/kick-bass.mp3"
    }

    sound_location = drum_sounds[key_symbol]
    var sound = new Audio(sound_location)
    sound.play()
}

function buttonAnimation (key_symbol) {
    button = document.querySelector("." + key_symbol)
    button.classList.toggle("pressed")
    
    setTimeout(function() {
        button.classList.toggle("pressed")
    }, 100);
}

// detect button press
var drum_buttons = document.querySelectorAll("button.drum")
for (i = 0;i<drum_buttons.length;i++) {
    drum_buttons[i].addEventListener(type = "click", listener = function respondToButton() {
        play_drum(this.classList[0])
        buttonAnimation(this.classList[0])
    })
}

// detect keyboard press
document.addEventListener(type= "keydown", listener = function respondToKey(event) {
    play_drum(event.key)
    buttonAnimation(event.key)
})




setTimeout(function() {button.classList.toggle("pressed")}, 100);

