class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.setTimer();
  }

  updateClockFace({ days, hours, minutes, seconds }) {
    document.querySelector(
      `${this.selector} [data-value="days"]`
    ).textContent = days;
    document.querySelector(
      `${this.selector} [data-value="hours"]`
    ).textContent = hours;
    document.querySelector(
      `${this.selector} [data-value="mins"]`
    ).textContent = minutes;
    document.querySelector(
      `${this.selector} [data-value="secs"]`
    ).textContent = seconds;
  }

  setTimer() {
    const timerID = setInterval(() => {
      const targetTime = this.targetDate.getTime();
      const currentTime = Date.now();
      const deltaTime = targetTime - currentTime;
      if (deltaTime <= 0) {
        clearInterval(timerID);
        return console.log("Get a party!!!");
      }
      const days = this.getDays(deltaTime);
      const hours = this.getHours(deltaTime);
      const minutes = this.getMinutes(deltaTime);
      const seconds = this.getSeconds(deltaTime);

      this.updateClockFace({ days, hours, minutes, seconds });
    }, 1000);
  }

  getDays(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return days;
  }

  getHours(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    return hours;
  }

  getMinutes(time) {
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    return minutes;
  }

  getSeconds(time) {
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return seconds;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

export default CountdownTimer;
