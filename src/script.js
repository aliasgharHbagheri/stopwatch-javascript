let timerContainer = document.querySelector(".stopwatch");

const btn_TimerStop = document.querySelector(".btn-stop");
const btn_TimerStart = document.querySelector(".btn-start");
const btn_TimerReset = document.querySelector(".btn-reset");

let [hours, minutes, seconds, timer] = [0, 0, 0]; // Initializing the stopwatch


btn_TimerStart.addEventListener("click", () => {
    // Call the startTimer function every 1 second
    timer = setInterval(() => { 
        startStopwatch();
  }, 1000);
});

// Stop the stopwatch
btn_TimerStop.addEventListener("click", () => {
  clearInterval(timer);
  timerContainer.classList.add("stop_stopwatch");
});

// Restart the stopwatch
btn_TimerReset.addEventListener("click", () => {
  clearInterval(timer);


  [hours, minutes, seconds] = [0, 0, 0];
  timerContainer.innerHTML = `0${hours} : 0${minutes} : 0${seconds}`;
  timerContainer.classList.remove("stopwatch-start");
  timerContainer.classList.remove("stop_stopwatch");
});


// Stopwatch start function
function startStopwatch() {

  seconds += 1;
  timerContainer.classList.add("stopwatch-start");
  timerContainer.classList.remove("stop_stopwatch");

  // If the seconds reach 60
  if (seconds > 59) {
    seconds = 0;
    minutes += 1;
  }

  // If the minutes reach 60
  if (minutes > 59) {
    minutes = 0;
    hours += 1;
  }

  // Placement (hours, minutes, seconds) in the timerContainer according to the specified condition
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timerContainer.innerHTML = `${h} : ${m} : ${s}`;
}
