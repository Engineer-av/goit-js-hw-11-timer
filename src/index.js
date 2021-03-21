import "./styles.css";

import CountdownTimer from "./js/countDownTimer.js";

const refs = {
  day: document.querySelector(`[data-value="days"]`),
  hour: document.querySelector(`[data-value="hours"]`),
  minute: document.querySelector(`[data-value="mins"]`),
  second: document.querySelector(`[data-value="secs"]`)
};

const upToBirthday = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 25, 2021"),
  onTick: updateClockFace
});

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.day.textContent = days;
  refs.hour.textContent = hours;
  refs.minute.textContent = minutes;
  refs.second.textContent = seconds;
}
