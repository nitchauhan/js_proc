console.log("hi musiclist");
var divlength = document.querySelectorAll('.song').length;
for (var i = 0; i < divlength; i++) {
    var demo = document.querySelectorAll('.song')[i].
        addEventListener('click', playsong);

    var demo = document.querySelectorAll('.song')[i].
        addEventListener('dblclick', pausesong);
}

var song1 = new Audio();
song1.src = "ms/1.mp3";

var song2 = new Audio();
song2.src = "ms/2.mp3";

var song3 = new Audio();
song3.src = "ms/3.mp3";

var song4 = new Audio();
song4.src = "ms/4.mp3";

var song5 = new Audio();
song5.src = "ms/5.mp3";

var song6 = new Audio();
song6.src = "ms/6.mp3";

var song7 = new Audio();
song7.src = "ms/7.mp3";

var song8 = new Audio();
song8.src = "ms/8.mp3";

var song9 = new Audio();
song9.src = "ms/9.mp3";

var song1 = new Audio();
song1.src = "ms/1.mp3";

var song2 = new Audio();
song2.src = "ms/2.mp3";

var song3 = new Audio();
song3.src = "ms/3.mp3";

function playsong() {
    var songid = this.innerHTML;
    console.log("songid");
    // console.log()

    switch (songid) {
        case "a":
            song1.play();

            break;

        case "b":
            song2.play();
            break;

        case "c":
            song3.play()

            break;

        case "d":
            song4.play()

            break;

        case "e":
            song5.play()

            break;

        case "f":
            song6.play()

            break;

        case "g":
            song7.play()

            break;

        case "h":
            song8.play()

            break;

        case "i":
            song9.play()

            break;
            case "j":
                song1.play();
    
                break;
    
            case "k":
                song2.play();
                break;
    
            case "l":
                song3.play()
    
                break;


        default:
            alert("its end baby:");
            break;
    }
}


function pausesong() {
    var songid = this.innerHTML;
    console.log("songid");
    // console.log()

    switch (songid) {
        case "a":
            song1.pause();

            break;

        case "b":
            song2.pause();
            break;

        case "c":
            song3.pause()

            break;

        case "d":
            song4.pause()

            break;

        case "e":
            song5.pause()

            break;

        case "f":
            song6.pause()

            break;

        case "g":
            song7.pause()

            break;

        case "h":
            song8.pause()

            break;

        case "i":
            song9.pause()

            break;
            case "j":
                song1.pause();
    
                break;
    
            case "k":
                song2.pause();
                break;
    
            case "l":
                song3.pause()
    
                break;

        default:
            alert("its end baby:");
            break;
    }
}


