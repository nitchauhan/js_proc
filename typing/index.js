console.log('its typing baby....');

const setOfWords = [
    "Any fool can write code that a computer can understand. ...",
    "Experience is the name everyone gives to their mistakes.",
    "oco Chanel Java is to JavaScript what car is to Carpet",
    "If you're having one of those days where you're feeling a little sluggish, check out this list of great quotes (and the link to hilarious memes)!"
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);


    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMsg = " you typed at " +speed+ " words per minutes ";
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;

}
const compareWords = (str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    return (cnt + "correct out of " + words1.length + " words and the total number of errors are "+ errorWords + ".");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}


btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playGame();

    }
    else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
    // e.location.window(load)
})
