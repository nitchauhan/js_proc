console.log("this is alarm");
constalarmSubmit = document.getElementById('alarmSubmit');

//add an ebnt listner to the submit

alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

//function to playring

function ringBell() {
    audio.play();
}

function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log('setting alarm for ${alarmDate}...');
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0) {
        setTimeout(() => {
            console.log("ringing");
            ringBell();
        }, timeToAlarm);
    }
}