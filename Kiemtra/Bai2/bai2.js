let minutes = 0;
let seconds = 0;
let intervalId;
let alarmSound = new Audio('alarm.mp3'); // Thay đổi đường dẫn file nhạc báo thức

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

function startTimer() {
    minutes = parseInt(document.getElementById('minutes').value) || 0;
    seconds = parseInt(document.getElementById('seconds').value) || 0;

    if (isNaN(minutes) || isNaN(seconds) || (minutes === 0 && seconds === 0)) {
        alert("Vui lòng nhập thời gian hợp lệ!");
        return;
    }

    updateTimerDisplay();

    intervalId = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (seconds > 59){
            seconds = seconds - 59
            minutes = minutes + 1
        }

        if (minutes === 0 && seconds === 0) {
            clearInterval(intervalId);
            alarmSound.play();
            alert("Hết giờ!");
            document.getElementById('resetBtn').disabled = false;
        }

        updateTimerDisplay();
    }, 1000);

    document.getElementById('startBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
}

function resetTimer() {
    clearInterval(intervalId);
    alarmSound.pause();
    alarmSound.currentTime = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('minutes').value = ""
    document.getElementById('seconds').value = ""

    updateTimerDisplay();

    document.getElementById('startBtn').disabled = false;
    document.getElementById('resetBtn').disabled = true;
}

function updateTimerDisplay() {
    let timerString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').innerHTML = timerString;
}
