import "./styles.css";

import CountdownTimer from "./js/countDownTimer.js";

const upToBirthday = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 25, 2021")
});
