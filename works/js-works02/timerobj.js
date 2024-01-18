const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const hidden = document.getElementById('hidden');

let timeObj = {
  startTime: null,
  stopTime: null,
  timeoutID: null,
  hour: null,
  minutes: null,
  seconds: null,
  milliseconds: null,
  displayTime() {
    const currentTime = new Date(Date.now() - timeObj.startTime + timeObj.stopTime);
    timeObj.hour = Math.floor(currentTime / 3600000);
    timeObj.minutes = currentTime.getMinutes();
    timeObj.seconds = currentTime.getSeconds();
    timeObj.milliseconds = currentTime.getMilliseconds();
    time.textContent = `${String(timeObj.hour).padStart(2, '0')}:${String(timeObj.minutes).padStart(2, '0')}:${String(timeObj.seconds).padStart(2, '0')}.${String(timeObj.milliseconds).padStart(3, '0')}`;
    timeObj.timeoutID = setTimeout(timeObj.displayTime, 10);
    if(4 <= timeObj.seconds) {
      hidden.classList.add('hidden');
    }
  },
  start() {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    timeObj.startTime = Date.now();
    timeObj.displayTime();
  },
  stop() {
    hidden.classList.remove('hidden');
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    clearTimeout(timeObj.timeoutID);
    timeObj.stopTime += (Date.now() - timeObj.startTime);
    if(10 <= timeObj.seconds && timeObj.seconds < 11) {
      alert(`${timeObj.seconds}.${timeObj.milliseconds}秒！すごい！！`);
    } else {
      alert(`${timeObj.seconds}.${timeObj.milliseconds}秒！。残念…`);
    }
  },
  reset() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    time.textContent = '00:00:00.000';
    timeObj.stopTime = 0;
  }
};

startButton.addEventListener('click', () => {
  timeObj.start();
});

stopButton.addEventListener('click', () => {
  timeObj.stop();
});

resetButton.addEventListener('click', () => {
  timeObj.reset();
});